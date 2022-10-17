import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FormEvent, useEffect, useState } from 'react'
import Snackbar from '../../utils/Snackbar';




export default function Login() {
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        setPassword(data.get('password'));
    
    }
    const [email, setEmail] = useState<string | undefined |null>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('');
  
  
  useEffect(()=>{
  
      if(password && password.length < 6){
          setError(true);
          setErrorMessage('A senha deve ter no mínimo 6 caracteres');
      }else if(password){
          setError(false);
          setErrorMessage('');
          //chamar a API do server para validar usuários e senha.
          //se estiver tudo certo, redirecionar para a página de extrato.
  
          //adicionar o snackbar
          setOpen(true);
          //fazer o redirect
      };},[password]);

    return (
    <Box
    sx={{
      mt: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography component="h1" variant="h5">
      Tela de Login
    </Typography>
    {/* Qualquer comentário */}
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        id="email"
        name="email"
        fullWidth
        label="Digite o login"
        autoComplete="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        name="password"
        type="password"
        label="Digite a senha"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Lembrar-me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>

      {error && <Typography color="error">{errorMessage}</Typography>}
    </Box>  
    {open && (
    <Snackbar
      open={open}
      hide={5}
      message={"Usuário logado com sucesso! ...Aguarde..."}
      severity="success"
    />
  )}
  </Box>   
  
  
    )
}
