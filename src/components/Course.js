import React from "react";
import {
  Nav,
  Button,
  Menu,
  Grommet,
  Header,
  Box,
  Accordion,
  AccordionPanel,
  Text,
  Heading,
  Tabs,
  Tab,
  Carousel,
  Image,
  Paragraph
} from 'grommet';
import { Info } from 'grommet-icons';

const coreTheme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: '#7D4CDB',
    },
  },
};

class Course extends React.Component {
  render() {
    return (
      <Grommet theme={coreTheme}>
        <Header background="brand">
          <Nav direction="row" background="brand" pad="small">
            <Button icon={<Info />} hoverIndicator />
            <Menu label="Table of contents" items={[{ label: 'Topic one' }, { label: 'Topic two' }]} />
          </Nav>
        </Header>
        <Box pad="xlarge" background="light-1">
          <Heading align="center">This course is built entirely using Grommet.</Heading>
        </Box>
        <Box pad="xlarge" background="light-4">
          <Heading>Screen one</Heading>
          <Paragraph>Below is an accordion, click away.</Paragraph>
          <Accordion>
            <AccordionPanel label="Panel 1" background="brand" pad="xsmall">
              <Box pad="medium" background="light-2">
                <Text>One</Text>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Panel 2" background="brand" pad="xsmall">
              <Box pad="medium" background="light-2">
                <Text>Two</Text>
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box pad="xlarge" background="light-1">
          <Heading>Screen two</Heading>
          <Paragraph>These are some tabs.</Paragraph>
          <Tabs justify="start">
            <Tab title="Tab 1">
              <Box pad="medium" background="brand">
                <Paragraph>Tab one content.</Paragraph>
              </Box>
            </Tab>
            <Tab title="Tab 2">
            <Box pad="medium" background="brand">
                <Paragraph>Tab two content.</Paragraph>
              </Box>
            </Tab>
            <Tab title="Tab 3">
            <Box pad="medium" background="brand">
                <Paragraph>Tab three content.</Paragraph>
              </Box>
            </Tab>
          </Tabs>
        </Box>
        <Box pad="xlarge" background="light-4">
        <Heading>Screen three</Heading>
          <Paragraph>And a carousel too.</Paragraph>
        <Carousel width="large">
          <Image fit="cover" src="bike1.jpg" />
          <Image fit="cover" src="bike2.jpg" />
          <Image fit="cover" src="bike3.jpg" />
        </Carousel>
        </Box>
      </Grommet>
    );
  }
}

export default Course;
