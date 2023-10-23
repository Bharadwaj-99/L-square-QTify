/* eslint-disable no-template-curly-in-string */
import React from 'react';
import styles from './Card.module.css';
import {Chip, Tooltip} from '@mui/material';

const Card = ({data,type}) => {
  const getCard = (type) =>{
    switch(type){
      case "album":{
        const {image,follows,title,songs} = data;
        console.log("title",title,data)
        return (
           
          <Tooltip title={`${songs.length} songs`} placement='top' arrow>
          <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt ='album'/>
            <div className={styles.banner} >
              <Chip label ={`${follows} Follows`} size='small' className={styles.chip}/>

            </div>
          </div>
          <div className ={styles.titleWrapper}>
            <p>{title}</p>
          </div>
          </div>
          </Tooltip>
        )
      }
      case "songs":
				return (
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<img src={data.image} alt="song" loading="lazy" />
							<div className={styles.banner}>
								<div id={styles.pill}>
									<p>{data.likes} Likes</p>
								</div>
							</div>
						</div>
						<div className={styles.titleWrapper}>
							<p>{data.title}</p>
						</div>
					</div>
				);
      default: return <></>;
    }
  }
  return getCard(type);
  

}

export default Card
