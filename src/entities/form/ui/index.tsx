import { useState } from 'react';

import { Group, Header, Input, SimpleCell, Text } from '@vkontakte/vkui';

import { SubmitHandler, useForm } from 'react-hook-form';

import { FormAnswer, FormInput } from '../types';

const FormName = () => {
  const [age, setAge] = useState('');
  const [pastAges, setPastAges] = useState<FormAnswer[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const { onChange, onBlur, name, ref } = register('firstName', {
    required: true,
    pattern: /^[A-Za-z]+$/i,
  });

  const onSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
    let isCached = false;
    pastAges.forEach((item) => {
      if (item.name === data.firstName) {
        isCached = true;
        try {
          setAge(item.age.toString());
        } catch (err) {
          console.log(err);
        }
      }
    });

    if (!isCached) {
      fetch(`https://api.agify.io/?name=${data.firstName}`)
        .then((res) => res.json())
        .then((data) => {
          try {
            setAge(data.age.toString());
          } catch (err) {
            console.log(err);
          }
          setPastAges([...pastAges, data]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Group header={<Header mode='secondary'>Form block</Header>}>
        <SimpleCell>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              getRef={ref}
            />
            {errors?.firstName?.type === 'required' && (
              <Text
                weight='2'
                style={{ color: 'red', marginTop: 4 }}
              >
                This field is required
              </Text>
            )}
            {errors?.firstName?.type === 'pattern' && (
              <Text
                style={{ color: 'red', marginTop: 4 }}
                weight='2'
              >
                Alphabetical characters only
              </Text>
            )}
            <Text weight='1'>{age}</Text>
            <Input
              type='submit'
              style={{ margin: '20px 0' }}
            />
          </form>
        </SimpleCell>
      </Group>
    </>
  );
};

export default FormName;
