import React from 'react';
import {
  Container,
  Grid,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Button,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { CPFInput, LoginValidatorSchema } from '../../utils/Form';

function Login() {
  const submitForm = async values => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Logged with CPF ${values.cpf} and birthday ${values.birthday}`);
  };

  return (
    <Box mt={16}>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Formik
              initialValues={{ cpf: '', birthday: null }}
              validationSchema={LoginValidatorSchema}
              onSubmit={submitForm}
            >
              {({ values, touched, errors, handleChange, setFieldValue }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box mt={4}>
                        <Typography
                          variant="h5"
                          color="primary"
                          align="center"
                          gutterBottom
                        >
                          Bem vindo!
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          Para continuar, digite seus dados abaixo e clique no
                          botão avançar.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel htmlFor="cpf">
                        <Typography variant="body1" color="textPrimary">
                          CPF
                        </Typography>
                      </InputLabel>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        error={touched.cpf && Boolean(errors.cpf)}
                      >
                        <OutlinedInput
                          id="cpf"
                          name="cpf"
                          placeholder="Digite seu CPF"
                          value={values.cpf}
                          onChange={handleChange}
                          inputComponent={CPFInput}
                        />
                        <FormHelperText>
                          {touched.cpf ? errors.cpf : ''}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel htmlFor="birthday">
                        <Typography variant="body1" color="textPrimary">
                          Data de nascimento
                        </Typography>
                      </InputLabel>
                      <MuiPickersUtilsProvider
                        utils={DateFnsUtils}
                        locale={ptBrLocale}
                      >
                        <KeyboardDatePicker
                          disableFuture
                          fullWidth
                          inputVariant="outlined"
                          variant="outlined"
                          format="dd/MM/yyyy"
                          placeholder="Digite sua data de nascimento"
                          id="birthday"
                          name="birthday"
                          value={values.birthday}
                          onChange={date => {
                            setFieldValue('birthday', date);
                          }}
                          error={touched.birthday && Boolean(errors.birthday)}
                          helperText={touched.birthday ? errors.birthday : ''}
                          inputProps={{
                            'aria-label': 'birthday',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        type="submit"
                      >
                        Entrar
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Login;
