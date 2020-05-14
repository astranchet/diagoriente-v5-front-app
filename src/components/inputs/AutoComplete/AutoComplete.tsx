import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LogoRose from 'assets/form/Vector.png';
import LogoCheked from 'assets/form/check.png';
import { Location } from 'requests/types';
import useStyles from './styles';

interface IProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectText: (e: string | null) => void;
  value: string;
  name: string;
  placeholder: string;
  error?: boolean;
  errorText: string;
  options: Location[];
}

const AutoComplete = ({
  label,
  onChange,
  value,
  name,
  placeholder,
  error,
  errorText,
  options,
  onSelectText,
}: IProps) => {
  const classes = useStyles({ error: !!errorText });

  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} md={4} lg={6}>
          <div className={classes.labelContainer}>
            <div className={classes.label}>{label}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={6}>
          <div>
            <Autocomplete
              freeSolo
              openOnFocus={false}
              disableClearable
              options={options.map((option) => option.label)}
              onChange={(event: any, v: string | null) => onSelectText(v)}
              fullWidth={false}
              renderInput={(params) => (
                <div className={classes.wrapperInput}>
                  <TextField
                    {...params}
                    onChange={onChange}
                    className={classes.input}
                    name={name}
                    fullWidth={false}
                    placeholder={placeholder}
                    variant="outlined"
                    error={error}
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                  {errorText && <img src={LogoRose} className={classes.logo} alt="check" />}
                  {value && !errorText && <img src={LogoCheked} className={classes.logo} alt="check" />}
                </div>
              )}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AutoComplete;
