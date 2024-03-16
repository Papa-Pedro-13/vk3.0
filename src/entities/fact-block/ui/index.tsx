import { useEffect, useRef, useState } from 'react';

import { Button, Group, Header, SimpleCell, Textarea } from '@vkontakte/vkui';

const FactBlock = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const textareaRef = useRef(0);
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    if (textareaRef === null) return;
    if (textareaRef.current === null) return;

    textareaRef.current.focus();
    textareaRef.current.setSelectionRange(cursorPosition, cursorPosition);
  }, [fact, cursorPosition]);

  const getFact = async () => {
    setLoading(true);
    await fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
        setCursorPosition(data.fact.split(' ')[0].length);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <>
      <Group header={<Header mode='secondary'>Facts block</Header>}>
        <SimpleCell>
          <Textarea
            id='area'
            getRef={textareaRef}
            placeholder='Здесь будет факт...'
            value={fact}
            onChange={() => {}}
            cols={100}
          />
        </SimpleCell>
        <SimpleCell>
          <Button
            size={'m'}
            loading={loading}
            onClick={() => getFact()}
          >
            Получить факт
          </Button>
        </SimpleCell>
      </Group>
    </>
  );
};

export default FactBlock;
