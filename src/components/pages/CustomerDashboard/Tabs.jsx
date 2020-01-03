import React from 'react';
import Tab from '../../common/tab/Tab';
import { diaryBooking, lastHire, liveContract, offHireChose, quotes } from '../../constants/tabsConst';
import NumberPad from '../../common/NumberPad';

const Tabs = () => {
  return (
    <div className="row">
      <Tab to={quotes.path} title={quotes.name} className="col">
        <NumberPad number={33} />
      </Tab>
      <Tab to={diaryBooking.path} title={diaryBooking.name} className="col">
        <NumberPad number={33} />
      </Tab>
      <Tab to={liveContract.path} title={liveContract.name} className="col">
        <NumberPad number={33} />
      </Tab>
      <Tab to={offHireChose.path} title={offHireChose.name} className="col">
        <NumberPad number={33} />
      </Tab>
      <Tab to={lastHire.path} title={lastHire.name} className="col">
        <NumberPad number={33} />
      </Tab>
    </div>
  );
};


export default Tabs;
