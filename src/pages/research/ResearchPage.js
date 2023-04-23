import React from 'react';
import './style.scss';
export default function ResearchPage() {
  return (
    <div className="research-page">
      <div className="page-navigator">
        <a href="#inspiration">1) INSPIRATION</a>
        <a href="#affection">2) AFFECTION ON STUDY</a>
        <a href="#development">3) DEVELOPMENT IN M-ABM SIMULATION</a>
        <a href="#achievement">4) Achievement in ABM-MODEL</a>
      </div>
      <div className="research-header">
        <h1>Research and Development</h1>
      </div>
      <div className="research-body">
        <div id="inspiration" className="header-faux" />
        <h2>1) INSPIRATION</h2>{' '}
        <p>
          <b>ASF HN: Research and Development</b>: How ASF HN simulations are
          designed, and the research process of refining the simulations to best
          promote learning.
        </p>
        <p>
          Firstly, ASF HN was established with the purpose of addressing 2
          issues: developing the livestock economy in general or pig farming in
          particular, and digitizing the livestock industry through the smart
          feeding network model.
        </p>
        <p> This is the first desgin for a smart feeding network. </p>
        <img alt="" src={'../../image/research1.png'} />
        <p>
          Through many studies and reasearch we have succesfully builded the
          first model and it’s a great invention for our livestock economy.
        </p>
        <p>You can see the hold system design and build here</p>
        <p>
          From that we can see, simulation take an importants part in our living
          now and future because it can solve so many problems in various
          fields. You can see the growth of simulation through the time and now
          it can help us to save people by using CT simulation engine.
        </p>
        <iframe
          title="CT simulation engine"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yQeUQ_eontk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div id="affection" className="header-faux" />
        <h2 id="">2) AFFECTION ON STUDY </h2>
        <p>"Can ASF HN sims replace real lab equipment?" </p>
        <p>
          Our studies have shown that ASF HN sims are more effective for
          conceptual understanding; however, there are many goals of hands-on
          labs that simulations do not address. For example, specific skills
          relating to the functioning of equipment. Depending on the goals of
          your laboratory, it may be more effective to use just sims or a
          combination of sims and real equipment{' '}
        </p>
        <p>
          "Do students learn if I just tell them to go home and play with a
          sim?"{' '}
        </p>
        <p>
          Most students do not have the necessary drive to spend time playing
          with a science simulation (they're fun, but not that fun) on their own
          time unless there is a direct motivation such as their grade. This is
          one of the reasons we are pursuing the project of how to best
          integrate sims into homework.{' '}
        </p>
        <p>"Where is the best place to use ASF HN sims in my course?" </p>
        <p>
          We have found ASH HN sims to be very effective in lecture, in class
          activities, lab and homework. They are designed with minimal text so
          that they can easily be integrated into every aspect of a course.{' '}
        </p>
        <span>Our immediate interests are: </span>
        <p>
          Use of analogy to construct understanding: Students use analogies in
          sims to make sense of unfamiliar phenomena. Representations play a key
          role in student use of analogy.{' '}
        </p>
        <p>
          Simulations as tools for changing classroom norms: Sims are shaped by
          socio-cultural norms of science, but can also be used to change the
          traditional norms of how students engage in the classroom.{' '}
        </p>
        <p>
          Specific features of sims that promote learning and engaged
          exploration: Our design principles identify key characteristics of
          sims that make them productive tools for student engagement. Now we
          wish to study in detail how each feature impacts student
          understanding.{' '}
        </p>
        <p>
          Integrating simulations into homework: Simulations have unique
          features that are not available in most learning tools (interactivity,
          animation, dynamic feedback, allow for productive exploration){' '}
        </p>
        <p>
          Effectiveness of Chemistry simulations: We have just begun
          investigating the envelope of where and how chemistry simulations can
          be effective learning tools.{' '}
        </p>
        <div id="development" className="header-faux" />
        <h2 id="">3) DEVELOPMENT IN M-ABM SIMULATION </h2>
        <p>
          Multi-Agent Based Modeling (MABM) is a modeling approach that uses
          multiple agents to simulate complex systems. MABM is based on the
          concept of agent-based modeling, where each agent represents an
          individual or entity in a system, and they interact with each other to
          create emergent behavior of the overall system.{' '}
        </p>
        <p>
          In MABM, multiple agents with different characteristics, behaviors,
          and decision-making rules are modeled, and they interact with each
          other to create a complex and dynamic system. The interactions between
          agents can be influenced by various factors, such as environmental
          conditions, social norms, and individual preferences.{' '}
        </p>
        <p>
          MABM has been used in various fields, including economics, social
          sciences, environmental studies, and engineering. It provides a
          powerful tool for understanding the behavior and dynamics of complex
          systems, and for evaluating the potential outcomes of different policy
          decisions or interventions.{' '}
        </p>
        <p>
          Multi-Agent Based Modeling (MABM) has seen significant development
          over the years, particularly with the advances in computing power and
          the availability of large amounts of data. Some of the recent
          developments in MABM include:{' '}
        </p>
        <p>
          1 ) Integration with Machine Learning: MABM can now be combined with
          machine learning algorithms to improve agent decision-making processes
          and enhance the overall performance of the model.{' '}
        </p>
        <p>
          2) Agent-Based Deep Learning: A new technique called agent-based deep
          learning is being developed to allow agents to learn and adapt their
          behaviors based on the data they collect and the interactions they
          have with other agents.{' '}
        </p>
        <p>
          3) Network Analysis: MABM is increasingly being used with network
          analysis tools to model complex systems with multiple interacting
          components.{' '}
        </p>
        <p>
          4) Integration with GIS: Geographic Information Systems (GIS) are
          being integrated with MABM to provide spatial analysis capabilities
          and to allow for the modeling of spatially-dependent agent behaviors.{' '}
        </p>
        <p>
          5) Cloud Computing: Cloud computing services are being used to provide
          scalable computational resources for running large-scale MABM
          simulations.{' '}
        </p>
        <div id="achievement" className="header-faux" />
        <h2 id="">4) Achievement in ABM-MODEL </h2>
        <img alt="" src={'../../image/research2.png'} />
        <p>
          IN PADEMIC COVID 19 it was updated using real data from the COVID-19
          pandemic from May 26, 2020, to May 26, 2021 (365 days). Afer
          determining the sensitive parameters by optimization using the
          particle swarm algorithm, the MCovidSim-2 was processed thirty times
          using the model iteration to the 500th pandemic day, starting from May
          26, 2020. In other words, this means evaluating the ability of the
          updated model to the 365th in forecasting the results from May 26,
          2021, onwards. Tus, this procedure defnes the model verifcation task.
          Afer the verifcation (forecasting) task, the results from the thirty
          updated model solutions concerning the curve of the cumulative cases
          were analyzed statistically. A comparison between model results and
          real data was performed with the boxplot analysis, standard deviation,
          mean, maximum and minimum model data per epidemiological week. In
          short, this task defnes the updated model’s validation task. It was
          assumed to apply the social distance policy for all these tasks due to
          the city’s policy and the real data.{' '}
        </p>
        <h2>Reference</h2>
        <p>
          Maynard-Smith J., 1982, Evolution and the Theory of Games, Cambridge
          University Press.{' '}
        </p>
        <p>Nelson R. and Winter S., 1982, Evolutionary Economics, . </p>
        <p>
          Neumann J. v., 1944, Theory of Games and Economic Behaviour, Princeton
          University Press.{' '}
        </p>
        <p>
          Newell A. und Simon H. A.,1972,Human problem solving, Englewood
          Cliffs, N.J., Prentice-Hall.{' '}
        </p>
        <p>
          Rostow W.W., 1960, The Stages of Economic Growth: A Non-Communist
          Manifesto.{' '}
        </p>
      </div>
    </div>
  );
}
