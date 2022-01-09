import * as React from 'react';
import { PublicReadingInterfaceProps } from '../interfaces/publicreading';

export interface IWeeklyReadingProps {
    reading: PublicReadingInterfaceProps
}

export default function WeeklyReading ({reading}: IWeeklyReadingProps) {
  return (
    <div>
      <h1>weekly reading</h1>
      <h2>{reading.date}</h2>
    </div>
  );
}
