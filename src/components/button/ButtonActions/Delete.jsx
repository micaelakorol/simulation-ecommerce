import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/Context'
import trash from '../../../images/trash.svg'
import modal from '../../../styles/modal.module.sass'
//detele one element the cart
const Delete = ({id}) => {
    const {delFromCart} = useContext(UserContext)
  return (
    <button
    className={modal.btnDelete}
    onClick={() => delFromCart(id)}
  >
    <img src={trash} alt="delete one elements" />
    </button>

  )
}

export default Delete