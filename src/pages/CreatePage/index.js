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
import CompleteCreateForm from './CompleteCreateForm';

import { statSheet } from '../../gameData/constants';
import { useContextState } from 'dynamic-context-provider';

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
  return ['Select a class', 'Create an ad group', 'Create an ad'];
}



export default function CreatePage() {
  const { user } = useContextState()
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [createUserObj, setcreateUserObj] = useState({...initialCharacterObject, name: user.displayName})
  const [characterStats, setcharacterStats] = useState(statSheet)
  const [availablePoints, setavailablePoints] = useState(10)


  function updateCharacter(fields={}){
      const newObj = {...initialCharacterObject}
      forEach(Object.keys(fields), fieldName=>{
        newObj[fieldName] = fields[fieldName]
      })
      setcreateUserObj(newObj)
  }
  const handleNext = () => {
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
        return <ClassForm setvalues={(classOption)=>updateCharacter(classOption)} initialValues={{class: createUserObj.class}} />
      case 1:
        return <StatsForm updateCharacter={updateCharacter} availablePoints={availablePoints} setavailablePoints={setavailablePoints} characterStats={characterStats} setcharacterStats={setcharacterStats}/>;
      case 2:
        return <CompleteCreateForm createUserObj={{...createUserObj, stats: characterStats}}/>
      default:
        return 'Unknown step';
    }
  }
  function handleSubmit(){
    const character = {
      ...createUserObj,
      stats: Object.keys(characterStats).reduce((acc,statKey)=>{
        return {...acc, [statKey]: characterStats[statKey].points}
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