import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

function CardContent(props) {
  return (
    <div>
      <Card className="card">
        <h1>{props.title}</h1>
        <Image src={props.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.copyright}</Card.Header>
          <Card.Meta>
            <span className='date'>{props.date}</span>
          </Card.Meta>
          <Card.Description>
            {props.explanation}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            nasa.gov
          </a>
        </Card.Content>
      </Card>
    </div>
  )
};
export default CardContent
