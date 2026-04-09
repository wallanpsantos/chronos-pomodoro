import * as React from 'react';
import { PlayCircleIcon } from 'lucide-react';

import { Cycles } from '../Cycles/Cycles.tsx';
import { DefaultButton } from '../DefaultButton/DefaultButton.tsx';
import { DefaultInput } from '../DefaultInput/DefaultInput.tsx';

export function MainForm() {
  const handleCreateNewTask = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Click submit');
  };

  return (
    <>
      <form onSubmit={handleCreateNewTask} className='form' action=''>
        <div className='formRow'>
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='task'
            placeholder='Digite algo...'
          />
        </div>

        <div className='formRow'>
          <p>Próximo intervalo é de 25min</p>
        </div>

        <div className='formRow'>
          <Cycles />
        </div>

        <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  );
}
