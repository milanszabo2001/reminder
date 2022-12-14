import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import {Button, CardAction, CardActions} from "@mui/material";
import {motion} from 'framer-motion';
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const List=({people, setpeople})=>{
    const [modalIsOpen,setIsOpen]=useState(false)
    const [imgUrl,setImgUrl]=useState("")
    const openModal=(e)=>{
      console.log(e.target.src)
      setImgUrl(e.target.src)
      setIsOpen(true)
    }
    const closeModal=()=>{
      setIsOpen(false)
    }
    const handleDelete=(e)=>{
      console.log(e.target.id)
      let newArr=people.filter(obj=>obj.id!=e.target.id)
      setpeople(newArr)
    }
    //console.log(people)
    return (
<>
    <div className='d-flex justify-content-around flex-wrap p-2'>
    {people.length==0 && <div>...nincs esemény</div>}
    {people.map((obj)=>(
        <div className='mt-2 mr-1' key={obj.id}>
        <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="140"
        image={obj.image}
        alt={obj.name}
        onClick={openModal}
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
        <motion.span whileHover={{ scale: 1.3 }}>
        <Button id={obj.id} size="small" color='primary' onClick={handleDelete}>
            Delete
        </Button>
        </motion.span>

      </CardActions>
    </Card>
    </div>
    ))}
</div>

<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Button onClick={closeModal} size='small' color='primary'>Close</Button>

        <div>
          <img className='modalImg' src={imgUrl} alt="foto" />
        </div>
      </Modal>
        
    </>
    )
}