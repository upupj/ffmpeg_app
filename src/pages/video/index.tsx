import { PageContainer } from '@ant-design/pro-components';
import { history } from 'umi';
import styles from './index.less';

const Index: React.FC = () => {
  const goto = (url: string) => {
    history.push(url);
  };

  return (
    <PageContainer title="视频工具">
      <div className={styles.cardContainer}>
        <div
          className={styles.cardItem}
          onClick={() => goto('/video/videoMerge')}
        >
          视频合并
        </div>
        <div className={styles.cardItem}>1</div>
        <div className={styles.cardItem}>1</div>
        <div className={styles.cardItem}>1</div>
      </div>
    </PageContainer>
  );
};

export default Index;
