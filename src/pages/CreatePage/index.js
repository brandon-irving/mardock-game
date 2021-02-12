import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { initialCharacterObject } from '../../gameData/player/initialCharacterObject';
import { forEach } from 'lodash';
import ClassForm from './ClassForm';
import StatsForm from './StatsForm';
import WeaponForm from './WeaponForm';
import CompleteCreateForm from './CompleteCreateForm';

import { statSheet } from '../../gameData/constants';
import { useContextState } from 'dynamic-context-provider';
import weapons from '../../gameData/items/weapons';
import { useToaster } from '../../common/hooks/useToaster';

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
  const [openErrorToaster] = useToaster()
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [createUserObj, setcreateUserObj] = useState({...initialCharacterObject, name: user.displayName, stats: statSheet})
  const [availablePoints, setavailablePoints] = useState(10)
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
    if(isInvalidateCharacerObj()){
      return openErrorToaster({
        open: true,
        duration: 3000,
        message: isInvalidateCharacerObj(),
        severity: 'danger'
      })
    } 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function goToStep(index){
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
  function handleSubmit(){
    const character = {
      ...createUserObj,
      stats: Object.keys(createUserObj.stats).reduce((acc,statKey)=>{
        return {...acc, [statKey]: createUserObj.stats[statKey].points}
      },{})
    }
    console.log('log: handleSubmit', { character })
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={()=>goToStep(index)}>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    className={classes.button}
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
  );
}