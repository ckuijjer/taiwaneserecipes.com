import React from 'react'
import { navigate } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  media: {
    height: 180,
    backgroundColor: '#eee',
  },
})

const RecipeCard = ({ title, path, image }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => navigate(path)}>
        <CardMedia className={classes.media} image={image && image.src} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard
