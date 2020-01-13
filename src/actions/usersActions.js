import axios from 'axios';
import { GET_ALL_USERS, LOADING, ERROR } from '../types/usersTypes'

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data
    })
  } catch (error) {
    console.log('ERROOOOOOOOOOOOR')
    dispatch({
      type: ERROR,
      payload: [
        {
          nombre: 'Mamo',
          apellido: 'Pérez',
          correo: 'mamo@example.com',
          id: 0
        },
        {
          nombre: 'Papo',
          apellido: 'Rios',
          correo: 'papo@apellido.com',
          id: 1
        },
        {
          nombre: 'Bebito',
          apellido: 'Rios Pérez',
          correo: 'bebito@example.com',
          id: 2
        }
      ]
    })
  }
}