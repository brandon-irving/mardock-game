import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { initialCharacterObject } from '../../gameData/player/initialCharacterObject';
import { forEach } from 'lodash';
import ClassForm from './ClassForm';
import StatsForm from './StatsForm';
import WeaponForm from './WeaponForm';
import CompleteCreateForm from './CompleteCreateForm';

import { statSheet } from '../../gameData/constants';
import { useContextState } from 'dynamic-context-provider';
import weapons from '../../gameData/items/weapons';
import { launchErrorToaster } from '../../core/toaster';
import { useUpdateCharacter } from '../../common/hooks/useUpdateCharacter';
import { useHistory } from 'react-router-dom';
import BasicRoot from '../../common/BasicRoot';
import { convertStatSheet } from '../../common/hooks/useStatSheet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select a Class', 'Choose Your Stats', 'Choose a Weapon', 'Create Character'];
}



export default function CreatePage() {
  const { user } = useContextState()
  const history = useHistory()
  const classStyles = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [createUserObj, setcreateUserObj] = useState({...initialCharacterObject, name: user.displayName, stats: convertStatSheet(statSheet)})
  const [availablePoints, setavailablePoints] = useState(10)
  const [updateFireBaseCharacter] = useUpdateCharacter()

  function checkIfSkilledEnoughToEquip(value={requirement: {}}, character={stats:{}}){
    let skilledEnough = false
    forEach(Object.keys(character.stats), statName=>{
      const { points } = character.stats[statName]
      const requirement = value.requirement[statName] 
      const noRequirements = !Object.keys(value.requirement).length
      if((requirement && points >= requirement) || noRequirements){
        skilledEnough = true
      }
    })
    return skilledEnough
  }

  function isInvalidateCharacerObj(){
    let invalid = false
    if(!createUserObj.class){
      invalid = 'Please select a class'
    }
    if(!createUserObj.equipped.weapon){
      invalid = 'Please select a weapon'
    }
    if(!createUserObj.equipped.weapon){
      invalid = 'Please select a weapon'
    }
    if(!checkIfSkilledEnoughToEquip(weapons[createUserObj.equipped.weapon], createUserObj)){
      invalid = 'You are not able to use this weapon'
    }
    return invalid
  }

  function updateCharacter(fields={}){
      const newObj = {...createUserObj}
      forEach(Object.keys(fields), fieldName=>{
        newObj[fieldName] = fields[fieldName]
      })
      setcreateUserObj(newObj)
  }

  const handleNext = () => {
    if(isInvalidateCharacerObj() && activeStep === 2){
      return launchErrorToaster({content: isInvalidateCharacerObj()})
    } 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function goToStep(index){
    if(isInvalidateCharacerObj() && index === 3){
      return launchErrorToaster({content: isInvalidateCharacerObj()})
    } 
    setActiveStep(index);

  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ClassForm createUserObj={createUserObj} updateCharacter={updateCharacter} />
      case 1:
        return <StatsForm createUserObj={createUserObj} updateCharacter={updateCharacter} availablePoints={availablePoints} setavailablePoints={setavailablePoints} />;
      case 2:
        return <WeaponForm createUserObj={createUserObj} updateCharacter={updateCharacter} initialValues={{weapon: createUserObj.equipped.weapon}}/>
      case 3:
          return <CompleteCreateForm createUserObj={createUserObj}/>
      default:
        return 'Unknown step';
    }
  }
  async function handleSubmit(){
    try{
      const character = {...createUserObj,}
      await updateFireBaseCharacter({character})
      history.replace('/')
    }catch(e){
      console.error('log: error', e)
    }


  }
  function checkIfCharacterExists(){
    if(user.character)return history.replace('/')
    if(!user.uid)return history.replace('/sign-in')
  }
  React.useEffect(() => {
    checkIfCharacterExists()
  }, [user])
  return (
    <BasicRoot>
    <div className={classStyles.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={()=>goToStep(index)}>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classStyles.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classStyles.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    className={classStyles.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
    </BasicRoot>
  );
}