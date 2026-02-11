import { DefaultInput } from '../DefaultInput/DefaultInput.tsx';
import { Cycles } from '../Cycles/Cycles.tsx';
import { DefaultButton } from '../DefaultButton/DefaultButton.tsx';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    <>
      <form className='form' action=''>
        <div className='formRow'>
          <DefaultInput id='meuInput' type='text' labelText='task' placeholder='Digite algo...' />
        </div>

        <div className='formRow'>
          <p>Lorem ipsum dolor sit amet.</p>
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
