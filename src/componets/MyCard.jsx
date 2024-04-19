import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({img, nombre, descripcion, bg, tx }) => {
  return (
    <>
        <Card className='cardP' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} className='imgp' />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                   <Tags vari={bg} txt={tx} />
                </Card.Body>
        </Card>

    </>
  )
}

export default MyCard
