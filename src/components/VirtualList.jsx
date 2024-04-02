import styles from './VirtualList.module.css';
import { useState, useRef } from 'react';

const VirtualList = ({ users, selected, onSelect }) => {
  const viewportRef = useRef(null);
  const itemHeight = 30;
  const viewportHeight = 300;
  const visibleItems = Math.trunc(viewportHeight / itemHeight);
  const [visibleRange, setVisibleRange] = useState({
    start: 0,
    end: visibleItems,
  });

  const containerStyle = { height: users.length * itemHeight };

  const renderRows = () => {
    let result = [];

    for (
      let index = visibleRange.start;
      index < visibleRange.end + 1;
      index++
    ) {
      result.push(
        <div
          key={index}
          className={styles.item}
          style={{
            top: index * itemHeight,
            height: itemHeight,
            backgroundColor: selected?.id === users[index].id && "lightblue"
          }}
          onClick={() => onSelect(users[index])}
        >
          {users[index].name}
        </div>
      );
    }
    return result;
  };

  const scrollPos = () => {
    let currentIndex = Math.trunc(viewportRef.current.scrollTop / itemHeight);
    currentIndex =
      currentIndex - visibleItems >= users.length
        ? currentIndex - visibleItems
        : currentIndex;

    setVisibleRange({
      start: currentIndex,
      end:
        currentIndex + visibleItems >= users.length
          ? users.length - 1
          : currentIndex + visibleItems,
    });
  };
  
  return (
    <div ref={viewportRef} className={styles.virtualListWrapper} onScroll={scrollPos}>
      <div className={styles.container} style={containerStyle}>
        {renderRows()}
      </div>
    </div>
  )
}

export default VirtualList;