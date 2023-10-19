/* eslint-disable no-template-curly-in-string */
import React from 'react';
import styles from './Card.module.css';
import {Chip, Tooltip} from '@mui/material';

const Card = ({data,type}) => {
  const getCard = (type) =>{
    switch(type){
      case "album":{
        const {image,title} = data;
        // const {image,follows,title,song} = data;
        return (
          // eslint-disable-next-line no-template-curly-in-string
          <Tooltip title={'${songs.length} songs'} placement='top' arrow>
          <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt ='album'/>
            <div className={styles.banner} >
              <Chip label ={'${follows}Follows'} size='small' className={styles.chip}/>

            </div>
          </div>
          <div classname ={styles.titleWrapper}>
            <p>{title}</p>
          </div>
          </div>
          </Tooltip>
        )
      }
      default: return <></>;
    }
  }
  return getCard(type);
  

}

export default Card
