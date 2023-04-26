// status 0 off, 1 onl, 2 busy

export const forum_users = [
  {
    id: 1,
    name: 'Johny Nguyen',
    email: 'nt@a',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 1,
  },
  {
    id: 2,
    name: 'Robert Mark',
    email: 'nt@b',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 2,
  },
  {
    id: 3,
    name: 'Elao Ma',
    email: 'nt@c',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 0,
  },
  {
    id: 4,
    name: 'Nabati',
    email: 'nt@d',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 1,
  },
  {
    id: 5,
    name: 'John Jenny',
    email: 'nt@d',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 1,
  },
  {
    id: 6,
    name: 'Nguyen Dang',
    email: 'nt@d',
    avatar: 'https://i.pravatar.cc/150?img=6',
    status: 1,
  },
  {
    id: 7,
    name: 'Bo Cat',
    email: 'nt@d',
    avatar: 'https://i.pravatar.cc/150?img=7',
    status: 1,
  },
];
export const forum_posts = [
  {
    id: 1,
    title: 'Simulating Climate Change Scenarios',
    content: `As climate change becomes an increasingly pressing issue, scientists are turning to simulations to predict the potential impacts on our planet. 
        Using complex models that take into account a range of variables, such as atmospheric CO2 levels and sea temperatures, researchers can create different scenarios for how the climate may evolve over time. By simulating these scenarios, they can better understand the potential effects of climate change and develop strategies to mitigate its impact.`,
    user_id: 1,
    created_at: '2023-04-27',
    updated_at: '2023-04-27',
  },
  {
    id: 2,
    title: 'Simulating Economic Systems',
    content: `Economists use simulations to understand the behavior of complex economic systems. 
    By modeling different scenarios and running simulations, they can gain insights into how markets may respond to different factors, such as changes in interest rates or shifts in consumer behavior. These simulations can also be used to test the effectiveness of different economic policies and help guide decision-making at the highest levels of government.`,
    user_id: 2,
    created_at: '2023-03-27',
    updated_at: '2023-04-27',
  },
  {
    id: 3,
    title: 'Simulating Pandemic Outbreaks',
    content: `The COVID-19 pandemic has highlighted the importance of simulating infectious disease outbreaks. 
    Using models that take into account factors such as transmission rates and population density, researchers can create simulations to predict the potential spread of a disease and evaluate the effectiveness of different mitigation strategies. These simulations can be used to guide public health policy and inform decision-making at all levels of government.`,
    user_id: 4,
    created_at: '2023-04-27',
    updated_at: '2023-04-27',
  },
];
export const forum_comments = [
  {
    id: 1,
    content: 'Content 1',
    user_id: 1,
    post_id: 1,
    created_at: '2021-07-01 00:00:00',
    updated_at: '2021-07-01 00:00:00',
  },
  {
    id: 2,
    content: 'Content 2',
    user_id: 1,
    post_id: 1,
    created_at: '2021-07-01 00:00:00',
    updated_at: '2021-07-01 00:00:00',
  },
];
