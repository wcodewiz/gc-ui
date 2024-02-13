import React, { useState } from 'react';
import { useTheme } from './theme/useTheme';
import {
    FormHeader,
    FormFooter,
    Form,
    FormFile,
    FormCustomFile,
    FormCheckbox,
    FormSelect,
    FormOption,
    FormSwitch,
    FormRadio,
    FormDatePicker,
    FormTime,
    FormLabel,
    FormField,
    FormArea
} from './components/form';
import { FlexColumn, Flex, FlexRow } from './components/primary/Flex';
import { Container } from './components/primary/Container';
import { Content } from './components/primary/Content';
import { Heading } from './components/primary/Heading';
import { Button } from './components/primary/Button';
import Image from './components/primary/Image';
import { GOLD, PYTHON } from './assets';
import { Page } from './components/primary/Page';
import SizeBox from './components/primary/sizeBox';
import { Mensory } from './components/primary/Mensory';
import { Table, TableBody, TableBodyData, TableHead, TableHeadData, TableRow } from './components/table/Table';
import LoadMore from './components/table/LoadMore';
import { GCApp } from './GCApp';
import Dialog from './components/x/Dialog';
import Alert from './components/x/Alert';
import { AiFillAccountBook, AiFillAndroid, AiFillBank, AiFillCloseCircle, AiFillEdit, AiFillMinusCircle, AiFillPlusCircle, AiFillStar, AiFillWallet, AiOutlineUser } from 'react-icons/ai';
import DropDown from './components/x/Dropdown';
import ListTile from './components/x/ListTile';
import { List } from './components/x/List';
import Badge from './components/x/Badge';
import Card from './components/x/Card';
import Fade from './components/x/Fade';
import Chip from './components/x/Chip';
import { Bounce, Ping, Spin } from './components/x/Animation';
import ToolTip from './components/x/Tooltip';
import Zoom from './components/x/Zoom';
import ProgressBar from './components/x/ProgressBar';
import Rating from './components/x/Rating';
import Slider from './components/x/Slider';
import Snackbar from './components/x/snackbar';
import Steps from './components/x/Steps';
import ConfirmBox from './components/x/ConfirmBox';
import Tab from './components/x/Tab';
import Timeline from './components/x/TimeLine';
import BottomNavigator from './components/x/BottomNavigator';
import BreadCrumbs from './components/x/BreadCrumb';
import Accordion from './components/x/Accordion';
import Choice, { ChoiceItem } from './components/x/Choice';
import ContextMenu from './components/x/ContextMenu';
import ListItem from './components/x/ListItem';

const App = () => {
    const [_theme, setTheme] = useTheme();
    const [showDialog, setShowDialog] = useState(false);
    const [dropMe, setDropMe] = useState(false);
    const gridItems = [
        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={21} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={31} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={41} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={13} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={14} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={16} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={17} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={122} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={111} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={152} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={18} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />,
        <Image key={10} src={GOLD} variant={'outline'} fit={'cover'} sizeVariant={'auto'} />
    ];

    return (
        <GCApp>
            <>
                <Dialog
                    elevation={'large'}
                    radius={'small'}
                    screen={'full'}
                    open={showDialog}
                    onClose={() => {
                        setShowDialog(false);
                    }}
                >
                    <Content className="bg-white text-black ">
                        <Heading>Welcome to Site</Heading>
                        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam earum labore deserunt ea rem temporibus, quo quaerat nobis repudiandae distinctio neque minima iure
                        molestias repellendus saepe libero asperiores alias dolore.
                        <Flex axis={'around'} className="my-4">
                            <Button fontSize={'medium'} weight={'bold'} className="bg-green-500 text-white" transition={'slow'} radius={'meduim'} variant={'outline'} elevation={'small'}>
                                Get Started
                            </Button>
                            <Button
                                onClick={() => setShowDialog(false)}
                                fontSize={'medium'}
                                weight={'bold'}
                                className="bg-rose-500 text-white"
                                transition={'slow'}
                                radius={'meduim'}
                                variant={'outline'}
                                elevation={'small'}
                            >
                                Cancel
                            </Button>
                        </Flex>
                    </Content>
                </Dialog>
                <ProgressBar open={true} showBackdrop={false} type="indeterminate" color="skyblue" />

                <ContextMenu className="px-4 py-2 bg-gray-500 rounded w-1/6" contextLabel="More Items">
                    <ListItem className="bg-green-200 text-green-600 border ">File</ListItem>
                    <ListItem className="bg-green-200 text-green-600 border ">Open</ListItem>
                </ContextMenu>
                <Choice activeClassName="bg-rose-500 px-4 rounded-full" current={0} items={[ChoiceItem('', <>Choose a gender</>), ChoiceItem('male', <>Male</>), ChoiceItem('female', <>Female</>)]} />

                <Accordion prefixSwapIcon={<AiFillMinusCircle fontSize={20} />} prefixIcon={<AiFillPlusCircle fontSize={20} />} actionButton="left" heading="See how to use Grambid">
                    Welcome to Grambid Components
                </Accordion>

                <BreadCrumbs />
                <BottomNavigator
                    className="bg-green-500"
                    current={0}
                    label={['Bank', 'Profile', 'Wallet']}
                    navigatorItems={[<AiFillBank fontSize={30} />, <AiOutlineUser fontSize={30} />, <AiFillWallet fontSize={30} />]}
                />

                <Timeline ropeColor="red" prefixIcon={<AiFillAndroid fontSize={20} />}>
                    Whats up gys!!
                </Timeline>
                <Timeline ropeColor="red" prefixIcon={<AiFillAndroid fontSize={20} />}>
                    Going great man
                </Timeline>

                <Card className="w-2/6 p-4 shadow-gray-800" radius={'meduim'} elevation={'medium'}>
                    <Zoom>
                        <Content className=" text-white bg-red-500 rounded-md">
                            {/* <Heading>Welcome to Site</Heading> */}
                            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Content>
                    </Zoom>
                </Card>

                <Alert open={false} duration={10} closeIcon={<AiFillCloseCircle fontSize={23} className="text-black p-1 bg-gray-200" />} position={'topRight'} onClose={() => {}}>
                    <Content className=" text-white bg-red-500 rounded-md">
                        {/* <Heading>Welcome to Site</Heading> */}
                        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Content>
                </Alert>

                <List className="w-3/6">
                    <ListTile
                        className="bg-rose-500 rounded-md"
                        screen={'half'}
                        title={<Heading>Welome To My Best Day</Heading>}
                        prefixIcon={<>H</>}
                        trailingPosition={'bottomRight'}
                        suffixIcon={<>H</>}
                    >
                        <Badge value={23} fontSize={'xsmall'} space={'small'} radius={'tiny'} className="bg-green-500  text-white" position={'topMedium'}>
                            <AiOutlineUser fontSize={30} />
                        </Badge>
                        <Content className=" text-white">
                            <Chip rectangleSize={'medium'} radius={'tiny'} className="bg-green-500 my-2 text-white">
                                Hello
                            </Chip>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Content>
                    </ListTile>
                    <ListTile
                        className="bg-rose-500 rounded-md"
                        screen={'half'}
                        title={<Heading>Welome To My Best Day</Heading>}
                        prefixIcon={
                            <FlexColumn>
                                <AiOutlineUser fontSize={30} />
                                <AiOutlineUser fontSize={30} />
                                <AiOutlineUser fontSize={30} />
                            </FlexColumn>
                        }
                        trailingPosition={'bottomRight'}
                        suffixIcon={
                            <FlexColumn>
                                <AiFillEdit fontSize={30} />
                                <AiFillEdit fontSize={30} />
                                <DropDown header={<AiFillEdit onClick={() => setDropMe(true)} fontSize={30} />} open={dropMe} onClose={() => setDropMe(false)}>
                                    <Content className=" text-black bg-white w-full">Welcome Lorem ipsum dolor sit amet.</Content>
                                </DropDown>
                            </FlexColumn>
                        }
                    >
                        <Content className=" text-white">Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.</Content>
                    </ListTile>
                    <ListTile
                        className="bg-rose-500 rounded-md"
                        screen={'half'}
                        title={<Heading>Welome To My Best Day</Heading>}
                        prefixIcon={<>H</>}
                        trailingPosition={'bottomRight'}
                        suffixIcon={<>H</>}
                    >
                        <Content className=" text-white">Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.</Content>
                    </ListTile>
                </List>

                <div>
                    <DropDown
                        prefixIcon={dropMe ? <AiFillAccountBook fontSize={30} /> : <AiFillAndroid fontSize={30} />}
                        screen={'half'}
                        header={
                            <button className="text-white bg-red-500" onClick={() => setDropMe(!dropMe)}>
                                DropMe
                            </button>
                        }
                        open={dropMe}
                        onClose={() => setDropMe(false)}
                    >
                        <Container className="bg-white text-black">
                            <Heading>Hello</Heading>
                            <Heading>Hello 2</Heading>
                            <Heading>Hello 3</Heading>
                            <Heading>Hello 4</Heading>
                            <Heading>Hello 5</Heading>
                        </Container>
                    </DropDown>
                </div>

                <Flex>
                    <Ping>
                        <Chip rectangleSize={'medium'} radius={'tiny'} className="bg-rose-500 my-2 text-white">
                            Hello
                        </Chip>
                    </Ping>
                    <Spin>
                        <Chip className="bg-rose-500 my-2 text-white">Hello</Chip>
                    </Spin>
                    <Bounce>
                        <Chip className="bg-rose-500 my-2 text-white">Hello</Chip>
                    </Bounce>
                </Flex>

                <Fade start={true} delay="2000" type="fade-in" duration={'medium'}>
                    <Heading>Fade Me 2</Heading>
                </Fade>
                <Container className="mx-4">
                    <ToolTip position={'top'} value={<Container className="bg-green-500 text-white px-4">Created by Ozz</Container>}>
                        <Content>Lorem ipsum dolor, sit amet consectetur adipisicing.</Content>
                    </ToolTip>
                </Container>

                <Rating emptyIcon={<AiFillStar className="text-white text-4xl" />} filledIcon={<AiFillStar className="text-rose-500 text-4xl" />} count={5} />

                <Snackbar title="Account Login" open={false} duration={51} position={'bottomLeft'} className="bg-green-500 rounded-md text-white" onClose={() => {}}>
                    Login Successful!
                </Snackbar>

                <Steps
                    current={0}
                    className="bg-green-500 text-white"
                    radius={'full'}
                    axis="horizontal"
                    activeClassName="bg-rose-500 text-white"
                    weight={'bold'}
                    family={'sans'}
                    spacing={'medium'}
                    stepsItem={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'step 5', 'Step 6', 'Step 7']}
                    stepContent={[
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Content>I am a Cool step</Content>,
                        <Content>I am a Cool step 6</Content>,
                        <Content>I am a Cool step 4</Content>,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />
                    ]}
                />

                <Tab activeClassName={'bg-rose-200 text-white px-4 rounded-full'} current={0} tabs={['tab 1', 'tab 2', 'tab 3']} panels={['text 1', 'text 2', 'text 3']} axis="vertical" />

                <ConfirmBox
                    heading={'Warning!'}
                    show={false}
                    okButton={
                        <Button radius={'meduim'} className="bg-rose-500 text-white hover:bg-rose-300">
                            Continue
                        </Button>
                    }
                    cancelButton={
                        <Button radius={'meduim'} className="bg-green-500 text-white  hover:bg-green-300">
                            Cancel
                        </Button>
                    }
                >
                    Do you want to exit?
                </ConfirmBox>

                <Slider
                    autoplay={true}
                    playDuration={4}
                    slides={[
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />,
                        <Image key={101} src={PYTHON} variant={'outline'} fit={'cover'} sizeVariant={'full'} />
                    ]}
                />

                <FormHeader heading="Login Form" variant={'outlined'} outlined footer={<FormFooter>Create ACCOUNT</FormFooter>}>
                    <Form name="myform">
                        <FormLabel value="First Name" errorContent="there was an error">
                            <FormField
                                sizeVariant={'small'}
                                capitalize
                                radius={'full'}
                                variant={'outline'}
                                prefixIcon={<label>Hi</label>}
                                suffixIcon={<label>---/</label>}
                                name="fname"
                                placeholder="My Name"
                            />
                        </FormLabel>
                        <FormField
                            isPhone
                            sizeVariant={'small'}
                            radius={'full'}
                            variant={'outline'}
                            prefixIcon={<label>Hi</label>}
                            suffixIcon={<label>---/</label>}
                            name="fname"
                            placeholder="My Name"
                        />
                        <FormArea sizeVariant={'small'} radius={'full'} variant={'outline'} prefixIcon={<label>Hi</label>} suffixIcon={<label>---/</label>} name="fname" placeholder="My Name" />
                        <FormFile radius={'full'} sizeVariant={'small'} />

                        <FormCustomFile
                            name="photo"
                            radius={'full'}
                            className="w-24 h-24 flex justify-center items-center text-xs whitespace-nowrap"
                            sizeVariant={'small'}
                            child={<>Choose A File</>}
                        />
                        <FormCheckbox name="Indomie" radius={'small'} sizeVariant={'xsmall'} value="Hello xsmall" />
                        <FormCheckbox name="Indomie" radius={'small'} sizeVariant={'small'} value="Hello small" />
                        <FormCheckbox color="green" name="Indomie" radius={'small'} sizeVariant={'medium'} value="Hello medium" />
                        <FormCheckbox color="red" name="Indomie" radius={'small'} sizeVariant={'medium'} value="Hello medium" />
                        <FormCheckbox name="Indomie" radius={'small'} sizeVariant={'large'} value="Hello large" />

                        <FormSelect onChange={() => setShowDialog(true)} variant={'default'} sizeVariant={'small'} radius={'small'}>
                            <FormOption value={''}>Choose a city</FormOption>
                            <FormOption value={'abuja'}>Abuja</FormOption>
                        </FormSelect>

                        <Container elevation={'xsmall'} screen={'half'} align={'center'}>
                            <FlexRow className="gap-5">
                                <Flex>
                                    <FormSwitch sizeVariant={'large'} radius={'full'} variant={'outline'} isSwitchedOn={false} value="Enable" />
                                    <label>hello</label>
                                </Flex>

                                <FlexColumn>
                                    <FormSwitch sizeVariant={'large'} radius={'full'} variant={'outline'} isSwitchedOn={false} value="Enable" />
                                    <label>hello</label>
                                </FlexColumn>
                            </FlexRow>
                        </Container>

                        <FormLabel value="Choose Language">
                            <FormRadio name="language" value="English" sizeVariant={'small'} radius={'full'} />
                            <FormRadio name="language" value="Espanol" color="red" sizeVariant={'small'} radius={'full'} />
                        </FormLabel>

                        <FormLabel radius={'small'} value="Date of Birth" variant={'outlined'}>
                            <FormDatePicker name="date_of_birth" sizeVariant={'small'} radius={'small'} />
                            <FormTime name="time" sizeVariant={'small'} radius={'small'} />
                        </FormLabel>
                    </Form>
                </FormHeader>

                <LoadMore execute={() => alert('loaded')}>Loading...</LoadMore>

                <Content>
                    <Heading>Welcome to Site</Heading>
                    Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam earum labore deserunt ea rem temporibus, quo quaerat nobis repudiandae distinctio neque minima iure molestias
                    repellendus saepe libero asperiores alias dolore.
                    <Container>
                        <Image src={PYTHON} variant={'outline'} alt="Samuel" fit={'contain'} radius={'full'} sizeVariant={'xxsmall'} />
                        <Image src={''} fallbackSize={'x8large'} className="bg-blue-500" alt="Gold" variant={'default'} fit={'cover'} radius={'small'} sizeVariant={'x5large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'medium'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'xlarge'} />
                        <Image src={GOLD} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x2large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x3large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x4large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x5large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x6large'} />
                        <Image src={GOLD} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x7large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'x8large'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'half'} />
                        <Image src={PYTHON} variant={'outline'} fit={'contain'} radius={'full'} sizeVariant={'full'} />
                        <Button fontSize={'medium'} weight={'bold'} transition={'slow'} radius={'meduim'} variant={'outline'} elevation={'small'}>
                            Get Started
                        </Button>
                        <SizeBox height={3} />
                        <Page to="#next">Click me</Page>
                    </Container>
                    <Mensory items={gridItems} columCount={4} column={'medium'} row={'xsmall'} flow={'row'} />
                </Content>
                <div className={`px-4 py-2 h-screen`}>
                    Hello
                    <button className="block capitalize" onClick={() => setTheme('light')}>
                        Light
                    </button>
                    <button className="block" onClick={() => setTheme('dark')}>
                        Dark
                    </button>
                </div>
                <Table caption={'Users List'} borderVariant={'collapse'} borderColor="border-rose-500" spacing={'xsmall'} className="rounded w-3/6" captionPosition={'bottom'} variant={'fixed'}>
                    <TableHead className="bg-rose-500 text-left text-white">
                        <TableHeadData className="px-4">First Name</TableHeadData>
                        <TableHeadData className="px-4">Last Name</TableHeadData>
                        <TableHeadData className="px-4">Age</TableHeadData>
                    </TableHead>
                    <TableBody className="bg-gray-200">
                        <TableRow>
                            <TableBodyData>Samuel</TableBodyData>
                            <TableBodyData>Clinton</TableBodyData>
                            <TableBodyData>22</TableBodyData>
                        </TableRow>
                        <TableRow>
                            <TableBodyData>Ada</TableBodyData>
                            <TableBodyData>Ijie</TableBodyData>
                            <TableBodyData>34</TableBodyData>
                        </TableRow>
                    </TableBody>
                </Table>
            </>
        </GCApp>
    );
};

export default App;
