import { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>№</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Link</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              <Typography as="a" href="https://react.dev/" variant="link1" target="_blank">
                Docs
              </Typography>
            </Table.Cell>
            <Table.Cell>Frontend</Table.Cell>
            <Table.Cell>29.08.2023</Table.Cell>
            <Table.Cell> 🚀</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              <Typography as="a" href="https://react.dev/" variant="link1" target="_blank">
                Docs
              </Typography>
            </Table.Cell>
            <Table.Cell>Frontend</Table.Cell>
            <Table.Cell>29.08.2023</Table.Cell>
            <Table.Cell>👨🏼‍💻</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'

const data = [
  {
    id: '01',
    number: 1,
    description: description,
    link: {
      title: 'React Docs',
      path: 'https://react.dev/',
    },
    type: 'Frontend',
    date: '30.08.2023',
  },
  {
    id: '02',
    number: 2,
    description: description,
    link: {
      title: 'NodeJS Docs',
      path: 'https://nodejs.org/en/docs',
    },
    type: 'Backend',
    date: '30.08.2023',
  },
  {
    id: '03',
    number: 3,
    description: description,
    link: {
      title: 'Git Docs',
      path: 'https://git-scm.com/doc',
    },
    type: 'Devops',
    date: '30.08.2023',
  },
]

export const MappedTable: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.HeadCell>№</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data.map(el => (
            <Table.Row key={el.id}>
              <Table.Cell>{el.number}</Table.Cell>
              <Table.Cell>{el.description}</Table.Cell>
              <Table.Cell>
                <Typography as="a" variant="link1" href={el.link.path} target="_blank">
                  {el.link.title}
                </Typography>
              </Table.Cell>
              <Table.Cell>{el.type}</Table.Cell>
              <Table.Cell>{el.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

export const Empty = {
  render: () => {
    const styles: CSSProperties = {
      marginBottom: '15px',
      color: 'var(--color-dark-100)',
    }

    return (
      <Table.Empty>
        <Typography variant="body1" style={styles}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        <Button>Add New Card</Button>
      </Table.Empty>
    )
  },
}
