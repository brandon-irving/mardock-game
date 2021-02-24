import React, { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    Grid,
    Typography,
    CardActions,
    Button,
    Divider,
    List,
    ListItem,
    CircularProgress,
    Backdrop
} from '@material-ui/core'
import { map } from 'lodash'
import story from '../../../gameData/story'
import 'mui-form-generator/dist/index.css'
import RichTextEditor from '../../../common/RichTextEditor'
import { getStoryChapter, updateStoryChapter } from '../../../firebase'
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalLoading } from '../hooks'

const Story = () => {
    const classes = useStyles();

    const [isLoading, setisLoading] = useState(true)
    const [selectedChapter, setselectedChapter] = useState({})
    const [globalLoading, setglobalLoading] = useGlobalLoading()
    
    async function handleSelectChapter(chapter) {
        setglobalLoading(true)
        const ch = await getStoryChapter(chapter)
        setselectedChapter({label: chapter, notes: ch.notes})
        setglobalLoading(false)
    }
    async function handleNoteSave(values) {
        await updateStoryChapter(selectedChapter.label, values, 'notes')

    }
    async function getFirstChapterData() {
        const ch = await getStoryChapter('Chapter 1')
        setselectedChapter({ label: 'Chapter 1', notes: ch.notes })
        setisLoading(false)

    }
    useEffect(() => {
        getFirstChapterData()
    }, [])
    if (isLoading) return null
    return (
        <Grid container>
            <Grid style={{ maxHeight: 500, overflow: 'scroll' }} item xs={6}>
                <List>
                    {
                        map(Object.keys(story), chapter => {
                            return (
                                <ListItem key={chapter}>
                                    <Card style={{ margin: '25px', width: '100%' }}>
                                        <CardContent>
                                            <Typography align="center" variant="h5" component="h2">
                                                {chapter}
                                            </Typography>
                                            <Divider />
                                            <Typography variant="h6"  >
                                                {story[chapter].description}
                                                <br />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={async () => handleSelectChapter(chapter)} fullWidth>Start Chapter</Button>
                                        </CardActions>
                                    </Card>
                                </ListItem>

                            )
                        })
                    }

                </List>

            </Grid>
            <Grid style={{ border: '1px solid' }} item xs={6}>
                <Typography variant="h5" align="center">{selectedChapter.label} Notes</Typography>
                <RichTextEditor defaultData={selectedChapter.notes} onSave={handleNoteSave} />
            </Grid>
            <Backdrop className={classes.backdrop} open={globalLoading} >
  <CircularProgress color="inherit" />
</Backdrop>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
export default Story
