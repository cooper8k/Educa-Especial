import Api from './Api';

export const login = async (email,password) =>{
    const {data} = await Api.post('/user/login',{email , password})
    localStorage.setItem('token',data.token)
    return data;
};

export const registrar = async (usuario)=>{
    const{data} = await Api.post('/user/registrar',{
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        password: usuario.password,
    })
    return data;
};
export const logout = () => localStorage.removeItem('token');