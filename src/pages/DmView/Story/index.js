import React, { useState } from 'react'
import {
    Card,
    CardContent,
    Grid,
    Typography,
    CardActions,
    Button,
    Divider,
    List,
    ListItem
} from '@material-ui/core'
import { map } from 'lodash'
import story from '../../../gameData/story'
import theme from '../../../core/theme'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import { Chapter1BluePrint } from './blueprints'
import RichTextEditor from '../../../common/RichTextEditor'

const blueprints = {
    'Chapter 1': () => Chapter1BluePrint({})
}
const Story = () => {
    const [selectedChapter, setselectedChapter] = useState('Chapter 1')
    function handleSelectChapter(story) {
        setselectedChapter(story)
    }
    function handleSubmit(values) {

    }
    return (
        <Grid container>
            <Grid style={{ maxHeight: 500, overflow: 'scroll'}} item xs={6}>
                <List>
                    {
                        map(Object.keys(story), chapter => {
                            return (
                                <ListItem>
                                    <Card style={{ margin: '25px' }}>
                                        <CardContent>
                                            <Typography align="center" variant="h5" component="h2">
                                                {chapter}
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Story
                                            </Typography>
                                            <Divider />
                                            <Typography variant="h6"  >
                                                {story[chapter].description}
                                                <br />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => handleSelectChapter(chapter)} fullWidth>Start Chapter</Button>
                                        </CardActions>
                                    </Card>
                                </ListItem>

                            )
                        })
                    }

                </List>

            </Grid>
            <Grid style={{ border: '1px solid' }} item xs={6}>
                <RichTextEditor />
            </Grid>
        </Grid>
    )
}

export default Story
