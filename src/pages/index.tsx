import styles from './index.less';

export default function IndexPage() {
  var a = {
    b: 1,
  };
  console.log(a);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className="a"></div>
    </div>
  );
}
