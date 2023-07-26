import { useEffect } from 'react';

export default function Details(props) {
  const { name } = props.route.params;
  useEffect(() => {
    `https://api.openweathermap.org/data/2.5/weather?q={name}&appid={API_key}`,
        ;
  }
  );


}
