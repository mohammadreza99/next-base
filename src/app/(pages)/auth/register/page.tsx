"use client"
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@mui/lab";
import { FormElements } from "@components/forms/FormElements";
import Link from "next/link";
import { useRegisterMutation } from "@services/dataService";

const Register = () => {
  const router = useRouter();
  const [trigger, {data, isLoading}] = useRegisterMutation();

  const onSubmit = async (value: any) => {
    try {
      const res = await trigger(value);
      router.push('/');
    } catch {
    }
  }

  return(
      <FormElements.Container onSuccess={onSubmit}>
        <Container component="main" maxWidth="xs" sx={{marginTop: 8}}>
          <Typography component="h1" marginBottom={2} variant="h5" textAlign="center"> Sign up </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormElements.TextField
                  fullWidth
                  autoComplete="given-name"
                  name="firstName"
                  label="First Name"
                  rules={{required: 'Required'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormElements.TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  rules={{required: 'Required'}}/>
            </Grid>
            <Grid item xs={12}>
              <FormElements.TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  rules={{required: 'Required'}}/>
            </Grid>
            <Grid item xs={12}>
              <FormElements.TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  rules={{required: 'Required'}}/>
            </Grid>
          </Grid>
          <LoadingButton type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
            Sign Up
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/auth/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Container>
      </FormElements.Container>
  )
}

export default Register;