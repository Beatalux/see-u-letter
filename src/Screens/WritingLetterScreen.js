import React from 'react'
import styled from 'styled-components';
import { BodyText, SubtitleText, Button, TitleText } from '../commons/text'
import { Link } from 'react-router-dom';

import { useDrag } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function Card() {
    const [{ isDragging }, drag] = useDrag({ //CAN IDENTIFY THE KIND OF PIECE BEING DRAGGED
        item: { type: ItemTypes.QUESTION },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      })
  
    return (
        <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    )
  }


  export const ItemTypes={
      QUESTIONS: 'BLAH'
  }