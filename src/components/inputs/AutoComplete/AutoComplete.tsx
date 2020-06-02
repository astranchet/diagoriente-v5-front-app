import React, { ReactElement, MouseEvent } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LogoRose from 'assets/form/Vector.png';
import LogoCheked from 'assets/form/check.png';
import useStyles from './styles';

interface IProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectText: (e: string | null) => void;
  value: string;
  name: string;
  placeholder: string;
  error?: boolean;
  errorText?: string;
  options: any[];
  icon?: ReactElement;
  className?: string;
  errorForm?: string;
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
  icon,
  className,
  errorForm,
  onSelectText,
}: IProps) => {
  const classes = useStyles({ error: !!(errorText || errorForm) });
  console.log('options', options);
  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        {label && (
          <Grid item xs={12} sm={4} md={5} lg={5}>
            <div className={classes.labelContainer}>
              <div className={classes.label}>{label}</div>
            </div>
          </Grid>
        )}
        <Grid item xs={12} sm={8} md={7} lg={7}>
          <div style={{ width: 229 }}>
            <Autocomplete
              freeSolo
              openOnFocus={false}
              disableClearable
              options={options.map((option) => option.label)}
              onChange={(event: any, v: string | null) => onSelectText(v)}
              fullWidth={false}
              className={className}
              autoComplete={false}
              /*   ListboxComponent={() => (
                <ul className={classes.dropDown}>
                  {options.map((option) => (
                    <div
                      key={option.label}
                      style={{
                        display: 'flex',
                        width: 228,
                        cursor: 'pointer',
                        margin: '3px 0px',
                      }}
                      onClick={(event: any) => {
                        event.stopPropagation();
                        event.preventDefault();
                        onSelectText(option);
                      }}
                    >
                      <div style={{ width: 20, height: 20 }}>{icon}</div>
                      <span style={{ wordBreak: 'break-word', width: 200 }}>{option.label}</span>
                    </div>
                  ))}
                </ul>
              )} */
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
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      autoComplete: 'off',
                    }}
                  />
                  {(errorText || errorForm) && <img src={LogoRose} className={classes.logo} alt="check" />}
                  {value && !errorText && !errorForm && <img src={LogoCheked} className={classes.logo} alt="check" />}
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
