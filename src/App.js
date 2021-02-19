import React from 'react'
import Section from './Section'
import Weather from './Weather' 

export default function App({}) {
    return (
        <>
    <Section name='Погода в Києві'>
      <Weather temperature='Температура: -12°C' airHumidity='Вологість: 69%' img='./Kiev.png' alt='ERROR' />
    </Section>
     <Section name='Погода в Львові'>
     <Weather temperature='Температура: -2°C' airHumidity='Вологість: 100%' img='./Lviv.png' alt='ERROR' />
   </Section>
    <Section name='Погода в Одесі'>
    <Weather temperature='Температура: -5°C' airHumidity='Вологість: 71%' img='./Odessa.png' alt='ERROR' />
  </Section>
  </>
    );
}