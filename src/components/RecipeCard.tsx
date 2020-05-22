import React from 'react'
import { navigate } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import humanizeISO8601Duration from '../humanizeISO8601Duration'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 180,
    backgroundColor: '#f0f0f0',
    margin: theme.spacing(2),
  },
  cardRoot: {},
}))

const RecipeCard = ({ title, path, image, totalTime, category }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0} square>
      <CardActionArea onClick={() => navigate(path)}>
        <CardMedia className={classes.media} image={image && image.src} />
        <CardContent className={classes.cardRoot}>
          <Typography variant="subtitle2" gutterBottom>
            {category ? category : <>&nbsp;</>}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {totalTime ? (
              `Total time: ${humanizeISO8601Duration(totalTime)}`
            ) : (
              <>&nbsp;</>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard
