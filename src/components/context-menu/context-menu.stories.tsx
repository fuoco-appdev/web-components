import React, { useState } from 'react'
import { Button } from '../button'
import { Divider } from '../divider'
import { Settings, Logout, Login } from '../icon/icons/line'
import { Typography } from '../../index'
import { ContextMenu } from '.'

export default {
  title: 'Navigation/ContextMenu',
  component: ContextMenu,
}

const triggerArea = (
  <div
    style={{
      background: 'gray',
      width: '280px',
      height: '180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span>Right click this area</span>
  </div>
)

export const Default = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <ContextMenu
      {...args}
      overlay={[
        <ContextMenu.Misc>
          <div>
            <Typography.Text small className="block">
              Signed in as{' '}
            </Typography.Text>

            <Typography.Text small strong>
              tom@example.com{' '}
            </Typography.Text>
          </div>
        </ContextMenu.Misc>,
        <Divider light />,
        <ContextMenu.Label>Group label</ContextMenu.Label>,
        <ContextMenu.Item onClick={() => console.log('clicked')}>
          Account
        </ContextMenu.Item>,
        <ContextMenu.Item>Settings</ContextMenu.Item>,
        <Divider light />,
        <ContextMenu.Item icon={<Login />}>Log out</ContextMenu.Item>,
      ]}
    >
      {triggerArea}
    </ContextMenu>
  </div>
)

Default.args = {}

export const doNotcloseOverlay = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <ContextMenu
      {...args}
      overlay={[
        <ContextMenu.Misc>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </ContextMenu.Misc>,
        <Divider light />,
        <ContextMenu.Item>Account</ContextMenu.Item>,
        <ContextMenu.Item>Settings</ContextMenu.Item>,
        <ContextMenu.Item>
          <Button icon={<Logout />}>Log out</Button>
        </ContextMenu.Item>,
      ]}
    >
      {triggerArea}
    </ContextMenu>
  </div>
)

doNotcloseOverlay.args = {}

export const withCustomStyles = (args: any) => (
  <div
    style={{
      margin: '0 auto',
      minHeight: '420px',
      marginTop: '220px',
      marginLeft: '400px',
    }}
  >
    <ContextMenu
      overlayStyle={{ minWidth: '500px' }}
      placement="bottomRight"
      {...args}
      overlay={[
        <ContextMenu.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </ContextMenu.Item>,
        <Divider light />,
        <ContextMenu.Item>Account</ContextMenu.Item>,
        <ContextMenu.Item>Settings</ContextMenu.Item>,
        <Divider light />,
        <ContextMenu.Item>
          <Button type="default" icon={<Logout />}>
            Log out
          </Button>
        </ContextMenu.Item>,
      ]}
    >
      {triggerArea}
    </ContextMenu>
  </div>
)

withCustomStyles.args = {}

export const Checkbox = (args: any) => {
  // const [checked, setChecked] = useState(false)

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <ContextMenu
        {...args}
        overlay={[
          <ContextMenu.Item icon={<Settings />}>Account</ContextMenu.Item>,
          <ContextMenu.Item>Settings</ContextMenu.Item>,
          <Divider light />,
          // <ContextMenu.Checkbox checked={checked} onChange={setChecked}>
          //   Show subtitles
          // </ContextMenu.Checkbox>,
        ]}
      >
        {triggerArea}
      </ContextMenu>
    </div>
  )
}

export const Radio = (args: any) => {
  const [value, setValue] = useState('red')

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <ContextMenu
        {...args}
        overlay={[
          <ContextMenu.RadioGroup value={value} onChange={setValue}>
            <ContextMenu.Radio value={'red'}>Red</ContextMenu.Radio>
            <ContextMenu.Radio value={'blue'}>Blue</ContextMenu.Radio>
            <ContextMenu.Radio value={'green'}>Green</ContextMenu.Radio>
          </ContextMenu.RadioGroup>,
        ]}
      >
        {triggerArea}
      </ContextMenu>
    </div>
  )
}
