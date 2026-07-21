import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// this contains the data for our features
const FeatureList = [
  {
    title: 'Publicly accessible',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our de-identified Carolina Community Composting data can be quickly and easily searched and downloaded for analysis, without the need for complicated and time consuming IRB approval processes required of identified data.
      </>
    ),
  },
  {
    title: 'FAIR data',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The Carolina Community Composting datasets are designed with accessibility in mind. We provide you with the data in open formats and the metadata you need to automate your analyses.
      </>
    ),
  },
  {
    title: 'Powered by the Dataverse API',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We help you quickly get the most of out working with Carolina Community Composting data by providing you with Jupyter Notebooks with all the scripts you need to retrieve data from our repository using the Dataverse API. So you can query and pull data directly into your reseach computing platform through the Jupyter Notebook.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
