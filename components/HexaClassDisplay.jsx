import { createSignal, Show, createEffect, onMount, onCleanup } from "solid-js";
import { createStore, unwrap } from "solid-js/store";
import FragProgression from "./database/FragProgression.json";
import GeneralSkills from "./database/General.json";
import { makePersisted } from "@solid-primitives/storage";

export default function HexaClassDisplay(props) {
  const [userClass, setUserClass, init] = makePersisted(createSignal(props.clName));
  const [userHexaData, setUserHexaData] = createStore({
        'class': '',
        'name': '',
        'lvl': 260,
        'exp': 0,
        'frag': 0,
        'o1' : 0,
        'o2': 0,
        'o3': 0,
        'o4': 0,
        'o5': 0,
        'o6': 0,
        'mst1': 0,
        'mst2': 0,
        'mst3': 0,
        'mst4': 0,
        'bst1': 0,
        'bst2': 0,
        'bst3': 0,
        'bst4': 0,
        'gen1': 0,
        'gen3': 0,
        'gen4': 0,
        'o1Targ' : 30,
        'o2Targ': 30,
        'o3Targ': 30,
        'o4Targ': 30,
        'o5Targ': 30,
        'o6Targ': 30,
        'mst1Targ': 30,
        'mst2Targ': 30,
        'mst3Targ': 30,
        'mst4Targ': 30,
        'bst1Targ': 30,
        'bst2Targ': 30,
        'bst3Targ': 30,
        'bst4Targ': 30,
        'gen1Targ': 30,
        'gen2Targ': 30,
        'gen3Targ': 30,
        'gen4Targ': 30,
      }); 
      
  const [ori1, setOri1] = createSignal(1);
  const [mst1, setMst1] = createSignal(1);
  const [mst2, setMst2] = createSignal(1);
  const [mst3, setMst3] = createSignal(1);
  const [mst4, setMst4] = createSignal(1);
  const [bst1, setBst1] = createSignal(1);
  const [bst2, setBst2] = createSignal(1);
  const [bst3, setBst3] = createSignal(1);
  const [bst4, setBst4] = createSignal(1);
  const [gen1, setGen1] = createSignal(1);
  
  const [ori1Targ, setOri1Targ] = createSignal(30);
  const [mst1Targ, setMst1Targ] = createSignal(30);
  const [mst2Targ, setMst2Targ] = createSignal(30);
  const [mst3Targ, setMst3Targ] = createSignal(30);
  const [mst4Targ, setMst4Targ] = createSignal(30);
  const [bst1Targ, setBst1Targ] = createSignal(30);
  const [bst2Targ, setBst2Targ] = createSignal(30);
  const [bst3Targ, setBst3Targ] = createSignal(30);
  const [bst4Targ, setBst4Targ] = createSignal(30);
  const [gen1Targ, setGen1Targ] = createSignal(30);
  
  const [fph, setfph, init1] = makePersisted(createSignal(20));
  const [wapday, setwapday, init2] = makePersisted(createSignal(2));

  function TestForHexaData(){
    const uData = localStorage.getItem(props.clName);
    if(uData === undefined){
      localStorage.setItem(props.clName, JSON.stringify(unwrap(userHexaData)))
      setUserHexaData({});
    }
    else {
      setUserHexaData(JSON.parse(uData));
    }
    console.log(userHexaData);
    setOri1(userHexaData.o1);
    setOri1Targ(userHexaData.o1Targ);
    setMst1(userHexaData.mst1);
    setMst1Targ(userHexaData.mst1Targ);
    setMst2(userHexaData.mst2);
    setMst2Targ(userHexaData.mst2Targ);
    setMst3(userHexaData.mst3);
    setMst3Targ(userHexaData.mst3Targ);
    setMst4(userHexaData.mst4);
    setMst4Targ(userHexaData.mst4Targ);
    setBst1(userHexaData.bst1);
    setBst1Targ(userHexaData.bst1Targ);
    setBst2(userHexaData.bst2);
    setBst2Targ(userHexaData.bst2Targ);
    setBst3(userHexaData.bst3);
    setBst3Targ(userHexaData.bst3Targ);
    setBst4(userHexaData.bst4);
    setBst4Targ(userHexaData.bst4Targ);
    setGen1(userHexaData.gen1);
    setGen1Targ(userHexaData.gen1Targ);
  }
  
  onMount( () => {
    TestForHexaData();
  });
  
  onCleanup(() => {
    setUserHexaData({
      'name': '',
      'lvl': 260,
      'exp': 0,
      'frag': 0,
      'o1' : 0,
      'o2': 0,
      'o3': 0,
      'o4': 0,
      'o5': 0,
      'o6': 0,
      'mst1': 0,
      'mst2': 0,
      'mst3': 0,
      'mst4': 0,
      'bst1': 0,
      'bst2': 0,
      'bst3': 0,
      'bst4': 0,
      'gen1': 0,
      'gen3': 0,
      'gen4': 0,
      'o1Targ' : 30,
      'o2Targ': 30,
      'o3Targ': 30,
      'o4Targ': 30,
      'o5Targ': 30,
      'o6Targ': 30,
      'mst1Targ': 30,
      'mst2Targ': 30,
      'mst3Targ': 30,
      'mst4Targ': 30,
      'bst1Targ': 30,
      'bst2Targ': 30,
      'bst3Targ': 30,
      'bst4Targ': 30,
      'gen1Targ': 30,
      'gen2Targ': 30,
      'gen3Targ': 30,
      'gen4Targ': 30,
    });
  });
  
  createEffect(() => {
    if(userHexaData.class != props.clName){
      localStorage.setItem(userHexaData.class, JSON.stringify(unwrap(userHexaData)));
      console.log('refresh User Data');
      setUserHexaData({
        'name': '',
        'class': props.clName,
        'lvl': 260,
        'exp': 0,
        'frag': 0,
        'o1' : 0,
        'o2': 0,
        'o3': 0,
        'o4': 0,
        'o5': 0,
        'o6': 0,
        'mst1': 0,
        'mst2': 0,
        'mst3': 0,
        'mst4': 0,
        'bst1': 0,
        'bst2': 0,
        'bst3': 0,
        'bst4': 0,
        'gen1': 0,
        'gen3': 0,
        'gen4': 0,
        'o1Targ' : 30,
        'o2Targ': 30,
        'o3Targ': 30,
        'o4Targ': 30,
        'o5Targ': 30,
        'o6Targ': 30,
        'mst1Targ': 30,
        'mst2Targ': 30,
        'mst3Targ': 30,
        'mst4Targ': 30,
        'bst1Targ': 30,
        'bst2Targ': 30,
        'bst3Targ': 30,
        'bst4Targ': 30,
        'gen1Targ': 30,
        'gen2Targ': 30,
        'gen3Targ': 30,
        'gen4Targ': 30,
      });
      TestForHexaData();
    }
    else {
      setUserHexaData(JSON.parse(localStorage.getItem(props.clName)));
    }
  })

  function UpdateLocalStorage() {
    localStorage.setItem(userHexaData.class, JSON.stringify(unwrap(userHexaData)));
    console.log(userHexaData);
  }

  function CurrFragTotal() {
    return (
      FragProgression.Origin.cumulative[ori1() - 1] +
      FragProgression.Mastery.cumulative[mst1() - 1] +
      FragProgression.Mastery.cumulative[mst2() - 1] +
      FragProgression.General.cumulative[gen1() - 1] +
      FragProgression.Boost.cumulative[bst1() - 1] +
      FragProgression.Boost.cumulative[bst2() - 1] +
      FragProgression.Boost.cumulative[bst3() - 1] +
      FragProgression.Boost.cumulative[bst4() - 1]
    );
  }

  function FragsToFinish() {
    return (
      FragProgression.Origin.cumulative[ori1Targ() - 1] -
      FragProgression.Origin.cumulative[ori1() - 1] +
      (FragProgression.Mastery.cumulative[mst1Targ() - 1] -
        FragProgression.Mastery.cumulative[mst1() - 1]) +
      (FragProgression.Mastery.cumulative[mst2Targ() - 1] -
        FragProgression.Mastery.cumulative[mst2() - 1]) +
      (FragProgression.General.cumulative[gen1Targ() - 1] -
        FragProgression.General.cumulative[gen1() - 1]) +
      (FragProgression.Boost.cumulative[bst1Targ() - 1] -
        FragProgression.Boost.cumulative[bst1() - 1]) +
      (FragProgression.Boost.cumulative[bst2Targ() - 1] -
        FragProgression.Boost.cumulative[bst2() - 1]) +
      (FragProgression.Boost.cumulative[bst3Targ() - 1] -
        FragProgression.Boost.cumulative[bst3() - 1]) +
      (FragProgression.Boost.cumulative[bst4Targ() - 1] -
        FragProgression.Boost.cumulative[bst4() - 1])
    );
  }

  return (
    <table class='custom-table'>
      <thead class='custom-table'>
        <th>Icon</th>
        <th>Skill Name</th>
        <th>Level</th>
        <th>Target Level</th>
        <th>To next Level</th>
        <th>Current Frags</th>
        <th>Frags to finish</th>
        <th>Total frags</th>
        <th></th>
        <th></th>
      </thead>
      <tbody class='custom-table'>
        <tr>
          <td>
            <image src={props.cl.O1.Icon}></image>
          </td>
          <td>{props.cl.O1.Name}</td>
          <td>
            <input
              value={ori1()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setOri1(event.target.value);
                setUserHexaData('o1', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={ori1Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setOri1Targ(event.target.value);
                setUserHexaData('o1Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={ori1()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={ori1() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Origin.levelTable[ori1()]}</td>
          </Show>
          <td>{FragProgression.Origin.cumulative[ori1() - 1]}</td>
          <Show when={ori1() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Origin.cumulative[ori1Targ() - 1] -
                FragProgression.Origin.cumulative[ori1() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Origin.total}</td>
          <td class="TableMarkerText">Frags/hr</td>
          <td>
            <input
              type="number"
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setfph(event.target.value)}}
              value={fph()}
              min='0'
              max='99'
              class="form__field"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.M1.Icon}></image>
          </td>
          <td>{props.cl.M1.Name}</td>
          <td>
            <input
              value={mst1()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst1(event.target.value);
                setUserHexaData('mst1', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={mst1Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst1Targ(event.target.value);
                setUserHexaData('mst1Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={mst1()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={mst1() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Mastery.levelTable[mst1()]}</td>
          </Show>
          <td>{FragProgression.Mastery.cumulative[mst1() - 1]}</td>
          <Show when={mst1() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Mastery.cumulative[mst1Targ() - 1] -
                FragProgression.Mastery.cumulative[mst1() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Mastery.total}</td>
          <td class="TableMarkerText">Hours Left</td>
          <td><a class="bold_numbers">{(Number(FragsToFinish()) / Number(fph())).toFixed(1)}</a></td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.M2.Icon}></image>
          </td>
          <td>{props.cl.M2.Name}</td>
          <td>
            <input
              value={mst2()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst2(event.target.value);
                setUserHexaData('mst2', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={mst2Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst2Targ(event.target.value);
                setUserHexaData('mst2Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={mst2()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={mst2() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Mastery.levelTable[mst2()]}</td>
          </Show>
          <td>{FragProgression.Mastery.cumulative[mst2() - 1]}</td>
          <Show when={mst2() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Mastery.cumulative[mst2Targ() - 1] -
                FragProgression.Mastery.cumulative[mst2() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Mastery.total}</td>
          <td class="TableMarkerText">WAPs/day</td>
          <td>
            <input
              type="number"
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setwapday(event.target.value)}}
              value={wapday()}
              min='0'
              max='12'
              class="form__field"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.M3.Icon}></image>
          </td>
          <td>HEXA Mastery 3</td>
          <td>
            <input
              value={mst3()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst3(event.target.value);
                setUserHexaData('mst3', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={mst3Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst3Targ(event.target.value);
                setUserHexaData('mst3Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={mst2()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={mst3() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Mastery.levelTable[mst3()]}</td>
          </Show>
          <td>{FragProgression.Mastery.cumulative[mst3() - 1]}</td>
          <Show when={mst3() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Mastery.cumulative[mst3Targ() - 1] -
                FragProgression.Mastery.cumulative[mst3() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Mastery.total}</td>
          <td class="TableMarkerText">Days Left</td>
          <td><a class="bold_numbers">{Math.ceil((Number(FragsToFinish()) / Number(fph()))/(Number(wapday())*2))}</a></td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.M4.Icon}></image>
          </td>
          <td>HEXA Mastery 4</td>
          <td>
            <input
              value={mst4()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst4(event.target.value);
                setUserHexaData('mst4', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={mst4Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setMst4Targ(event.target.value);
                setUserHexaData('mst4Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={mst2()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={mst4() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Mastery.levelTable[mst4()]}</td>
          </Show>
          <td>{FragProgression.Mastery.cumulative[mst4() - 1]}</td>
          <Show when={mst4() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Mastery.cumulative[mst4Targ() - 1] -
                FragProgression.Mastery.cumulative[mst4() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Mastery.total}</td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.B1.Icon}></image>
          </td>
          <td>{props.cl.B1.Name}</td>
          <td>
            <input
              value={bst1()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst1(event.target.value);
                setUserHexaData('bst1', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={bst1Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst1Targ(event.target.value);
                setUserHexaData('bst1Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={bst1()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={bst1() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Boost.levelTable[bst1()]}</td>
          </Show>
          <td>{FragProgression.Boost.cumulative[bst1() - 1]}</td>
          <Show when={bst1() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Boost.cumulative[bst1Targ() - 1] -
                FragProgression.Boost.cumulative[bst1() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Boost.total}</td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.B2.Icon}></image>
          </td>
          <td>{props.cl.B2.Name}</td>
          <td>
            <input
              value={bst2()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst2(event.target.value);
                setUserHexaData('bst2', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={bst2Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst2Targ(event.target.value);
                setUserHexaData('bst2Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={bst2()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={bst2() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Boost.levelTable[bst2()]}</td>
          </Show>
          <td>{FragProgression.Boost.cumulative[bst2() - 1]}</td>
          <Show when={bst2() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Boost.cumulative[bst2Targ() - 1] -
                FragProgression.Boost.cumulative[bst2() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Boost.total}</td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.B3.Icon}></image>
          </td>
          <td>{props.cl.B3.Name}</td>
          <td>
            <input
              value={bst3()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setUserHexaData('bst3', event.target.value);
                setBst3(event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={bst3Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst3Targ(event.target.value);
                setUserHexaData('bst3Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={bst3()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={bst3() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Boost.levelTable[bst3()]}</td>
          </Show>
          <td>{FragProgression.Boost.cumulative[bst3() - 1]}</td>
          <Show when={bst3() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Boost.cumulative[bst3Targ() - 1] -
                FragProgression.Boost.cumulative[bst3() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Boost.total}</td>
        </tr>
        <tr>
          <td>
            <image src={props.cl.B4.Icon}></image>
          </td>
          <td>{props.cl.B4.Name}</td>
          <td>
            <input
              value={bst4()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst4(event.target.value);
                setUserHexaData('bst4', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={bst4Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst4Targ(event.target.value);
                setUserHexaData('bst4Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={bst4()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={bst4() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.Boost.levelTable[bst4()]}</td>
          </Show>
          <td>{FragProgression.Boost.cumulative[bst4() - 1]}</td>
          <Show when={bst4() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.Boost.cumulative[bst4Targ() - 1] -
                FragProgression.Boost.cumulative[bst4() - 1]}
            </td>
          </Show>
          <td>{FragProgression.Boost.total}</td>
        </tr>
        <tr>
          <td>
            <image src={GeneralSkills.G1.Icon}></image>
          </td>
          <td>{GeneralSkills.G1.Name}</td>
          <td>
            <input
              value={gen1()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setGen1(event.target.value);
                setUserHexaData('gen1', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min="0"
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td>
            <input
              value={gen1Targ()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setGen1Targ(event.target.value);
                setUserHexaData('gen1Targ', event.target.value);
                UpdateLocalStorage();
              }}
              type="number"
              min={gen1()}
              max="30"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <Show when={gen1() < 30} fallback={<td>Maxed out</td>}>
            <td>{FragProgression.General.levelTable[gen1()]}</td>
          </Show>
          <td>{FragProgression.General.cumulative[gen1() - 1]}</td>
          <Show when={gen1() < 30} fallback={<td>Maxed out</td>}>
            <td>
              {FragProgression.General.cumulative[gen1Targ() - 1] -
                FragProgression.General.cumulative[gen1() - 1]}
            </td>
          </Show>
          <td>{FragProgression.General.total}</td>
        </tr>
        <tr>
          <td class="TableMarkerText">Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{() => CurrFragTotal()}</td>
          <td>{() => FragsToFinish()}</td>
          <td>
            {FragProgression.Origin.total +
              FragProgression.Mastery.total +
              FragProgression.Mastery.total +
              FragProgression.General.total +
              FragProgression.Boost.total +
              FragProgression.Boost.total +
              FragProgression.Boost.total +
              FragProgression.Boost.total}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
