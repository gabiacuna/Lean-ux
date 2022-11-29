import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, esES} from '@mui/x-date-pickers';
import { StaticDatePicker } from '@mui/x-date-pickers';
import esLocale from 'date-fns/locale/es'

import 'moment/locale/es';


export function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(dayjs('2022-11-28'));

  // moment.locale('es');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={esLocale}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        inputFormat="dd-mm-yyyyy"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default StaticDatePickerLandscape