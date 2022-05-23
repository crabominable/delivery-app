import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dataTestId } from '../../../utils';

const RegisterButton = () => {
  const navigate = useNavigate();
  return (
    <span className="span-register">
      Ainda não tem um cadastro?
      <button
        type="button"
        data-testid={ dataTestId.id04 }
        id={ dataTestId.id04 }
        onClick={ () => navigate('/register') }
      >
        register
      </button>
    </span>
  );
};

export default RegisterButton;
