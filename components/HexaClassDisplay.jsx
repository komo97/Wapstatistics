import { splitProps, createSignal, Show } from "solid-js";
import FragProgression from "./database/FragProgression.json";
import GeneralSkills from "./database/General.json";
import { makePersisted } from "@solid-primitives/storage";

export default function HexaClassDisplay(props) {
  const [ori1, setOri1, init] = makePersisted(
    createSignal(props.userdata.o1level)
  );
  const [mst1, setMst1, init2] = makePersisted(
    createSignal(props.userdata.m1level)
  );
  const [mst2, setMst2, init3] = makePersisted(
    createSignal(props.userdata.m2level)
  );
  const [bst1, setBst1, init4] = makePersisted(
    createSignal(props.userdata.b1level)
  );
  const [bst2, setBst2, init5] = makePersisted(
    createSignal(props.userdata.b2level)
  );
  const [bst3, setBst3, init6] = makePersisted(
    createSignal(props.userdata.b3level)
  );
  const [bst4, setBst4, init7] = makePersisted(
    createSignal(props.userdata.b4level)
  );
  const [gen1, setGen1, init8] = makePersisted(
    createSignal(props.userdata.g1level)
  );
  
  const [ori1Targ, setOri1Targ, initTarg1] = makePersisted(
    createSignal(30)
  );
  const [mst1Targ, setMst1Targ, initTarg2] = makePersisted(
    createSignal(30)
  );
  const [mst2Targ, setMst2Targ, initTarg3] = makePersisted(
    createSignal(30)
  );
  const [bst1Targ, setBst1Targ, initTarg4] = makePersisted(
    createSignal(30)
  );
  const [bst2Targ, setBst2Targ, initTarg5] = makePersisted(
    createSignal(30)
  );
  const [bst3Targ, setBst3Targ, initTarg6] = makePersisted(
    createSignal(30)
  );
  const [bst4Targ, setBst4Targ, initTarg7] = makePersisted(
    createSignal(30)
  );
  const [gen1Targ, setGen1Targ, initTarg8] = makePersisted(
    createSignal(30)
  );
  
  
  
  const [fph, setfph, init9] = makePersisted(createSignal(20));
  const [wapday, setwapday, init10] = makePersisted(createSignal(2));
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
                setOri1(event.target.value)}}
              type="numeric"
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
                setOri1Targ(event.target.value)}}
              type="numeric"
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
              type="numeric"
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
                setMst1(event.target.value)}}
              type="numeric"
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
                setMst1Targ(event.target.value)}}
              type="numeric"
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
                setMst2(event.target.value)}}
              type="numeric"
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
                setMst2Targ(event.target.value)}}
              type="numeric"
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
              type="numeric"
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
            <image src={props.cl.B1.Icon}></image>
          </td>
          <td>{props.cl.B1.Name}</td>
          <td>
            <input
              value={bst1()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBst1(event.target.value)}}
              type="numeric"
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
                setBst1Targ(event.target.value)}}
              type="numeric"
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
          <td class="TableMarkerText">Days Left</td>
          <td><a class="bold_numbers">{Math.ceil((Number(FragsToFinish()) / Number(fph()))/(Number(wapday())*2))}</a></td>
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
                setBst2(event.target.value)}}
              type="numeric"
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
                setBst2Targ(event.target.value)}}
              type="numeric"
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
                setBst3(event.target.value)}}
              type="numeric"
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
                setBst3Targ(event.target.value)}}
              type="numeric"
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
                setBst4(event.target.value)}}
              type="numeric"
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
                setBst4Targ(event.target.value)}}
              type="numeric"
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
                setGen1(event.target.value)}}
              type="numeric"
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
                setGen1Targ(event.target.value)}}
              type="numeric"
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
