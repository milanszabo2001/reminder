import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const List=({people})=>{
    console.log(people)
    return (
<>
    <div className='row justify-content-center'>
    
    {people.map((obj)=>(
        <div className='mt-2 col-md-6 col-12 border'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={obj.image}
        alt={obj.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {obj.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age:{obj.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
            Delete
        </Button>
      </CardActions>
    </Card>
    </div>
    ))}
</div>
        
    </>
    )
}