import { splitProps, createSignal, Show } from "solid-js";
import { makePersisted } from "@solid-primitives/storage";


export default function WapDisplay(props) {
  const [baseExp, setBaseExp, init] = makePersisted(createSignal(0));
  const [baseLevel, setBaseLevel, init2] = makePersisted(createSignal(260));
  const [baseMeso, setBaseMeso, init3] = makePersisted(createSignal(0));
  const [baseFrags, setBaseFrags, init4] = makePersisted(createSignal(0));
  const [wapStats, setWapStats, init5] = makePersisted(createSignal([]));
  const [avgExp, setExpStats, init6] = makePersisted(createSignal(0));
  const [avgMeso, setMesoStats, init7] = makePersisted(createSignal(0));
  const [avgFrags, setFragsStats, init8] = makePersisted(createSignal(0));
  const [updateBaseToggle, setupdateBaseToggle, init9] = makePersisted(
    createSignal(true)
  );

  const [wapTime, setWapTime] = createSignal(0);
  const [afterWapExp, setAfterWapExp] = createSignal(0);
  const [afterWapMeso, setAfterWapMeso] = createSignal(0);
  const [afterWapFrag, setAfterWapFrag] = createSignal(0);
  const [totalWapHours, setTotalWapHours] = createSignal(() => {
    let total = 0;
    for (let i = 0; i < wapStats().length; ++i) {
      total += Number(wapStats()[i].wapTime);
    }
    return total;
  });
  const [afterWapLevel, setAfterWapLevel] = createSignal(baseLevel());

  function SubmitWap(event) {
    if (wapTime() <= 0) return;
    let expDiff = afterWapExp() - baseExp();
    let lvlDiff = afterWapLevel() - baseLevel();
    if (lvlDiff > 0) {
      let totalDiff = Math.round(100 * lvlDiff);
      console.log(totalDiff - baseExp());
      expDiff = Number(totalDiff - baseExp()) + Number(afterWapExp());
    }
    let mesoDiff = afterWapMeso() - baseMeso();
    let fragDiff = afterWapFrag() - baseFrags();

    let stats = {
      expDiff: expDiff,
      lvlDiff: lvlDiff,
      mesoDiff: mesoDiff,
      fragDiff: fragDiff,
      wapTime: wapTime(),
      dateTime: Date.now(),
    };
    let wapArray = wapStats();
    let expCount = 0;
    let mesoCount = 0;
    let fragCount = 0;
    wapArray.push(stats);
    console.log(wapArray);

    setWapStats(wapArray);

    let hrCount = 0;
    for (let i = 0; i < wapStats().length; ++i) {
      expCount += wapStats()[i].expDiff / wapStats()[i].wapTime;
      mesoCount += wapStats()[i].mesoDiff / wapStats()[i].wapTime;
      fragCount += wapStats()[i].fragDiff / wapStats()[i].wapTime;
      hrCount += Number(wapStats()[i].wapTime);
    }
    setTotalWapHours(hrCount);
    setExpStats(expCount / wapStats().length);
    setMesoStats(mesoCount / wapStats().length);
    setFragsStats(fragCount / wapStats().length);

    if (!updateBaseToggle()) return;
    setBaseExp(afterWapExp());
    setBaseLevel(afterWapLevel());
    setBaseMeso(afterWapMeso());
    setBaseFrags(afterWapFrag());
  }

  function ResetStats(event) {
    setExpStats(0);
    setMesoStats(0);
    setFragsStats(0);
    setWapStats([]);
    setTotalWapHours(0);
    console.log(avgExp());
  }

  function ResetPostWap(event) {
    setAfterWapExp(baseExp());
    setAfterWapLevel(baseLevel());
    setAfterWapMeso(0);
    setAfterWapFrag(0);
  }

  return (
    <table class="custom-table">
      <thead>
        <th></th>
        <th>Pre-WAP</th>
        <th>Post-WAP</th>
        <th>Stats</th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td class="TableMarkerText">Level</td>
          <td class="td_center_aligned">
            <input
              value={baseLevel()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBaseLevel(event.target.value);
                setAfterWapLevel(event.target.value);
              }}
              type="numeric"
              min="1"
              max="300"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td class="td_center_aligned">
            <input
              value={afterWapLevel()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setAfterWapLevel(event.target.value)
                }}
              type="numeric"
              min={baseLevel()}
              max="300"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td class="TableMarkerText">Average Exp %/h</td>
          <td>
            <a class="bold_numbers">
              {avgExp() !== null ? Number(avgExp().toFixed(3)) : 0}
            </a>
          </td>
        </tr>
        <tr>
          <td class="TableMarkerText">Experience</td>
          <td class="td_center_aligned">
            <input
              value={baseExp()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                if (event.target.value > 99.999) event.target.value = 99.999;
                else if (event.target.value < 0) event.target.value = 0;
                
                setBaseExp(event.target.value);
                setAfterWapExp(event.target.value);
              }}
              type="numeric"
              min="0"
              max="99.999"
              step="0.001"
              class="form__field"
            >
              {" "}
            </input>{" "}
            %
          </td>
          <td class="td_center_aligned">
            <input
              value={afterWapExp()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                if (event.target.value > 99.999) event.target.value = 99.999;
                else if (event.target.value < 0) event.target.value = 0;
                setAfterWapExp(event.target.value);
              }}
              type="numeric"
              min="0"
              max="99.999"
              step="0.001"
              class="form__field"
            >
              {" "}
            </input>{" "}
            %
          </td>
          <td class="TableMarkerText">Average Meso/h</td>
          <td>
            <a class="bold_numbers">{avgMeso()}</a>
          </td>
        </tr>
        <tr>
          <td class="TableMarkerText">Meso</td>
          <td class="td_center_aligned">
            <input
              value={baseMeso().toLocaleString()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBaseMeso(event.target.value);
              }}
              type="numeric"
              min="0"
              class="form__field_long"
            >
              {" "}
            </input>
          </td>
          <td class="td_center_aligned">
            <input
              value={afterWapMeso().toLocaleString()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setAfterWapMeso(event.target.value);
              }}
              type="numeric"
              min="0"
              class="form__field_long"
            >
              {" "}
            </input>
          </td>
          <td class="TableMarkerText">Average Frags/h</td>
          <td>
            <a class="bold_numbers">{avgFrags()}</a>
          </td>
        </tr>
        <tr>
          <td class="TableMarkerText">Sol Erda Frags</td>
          <td class="td_center_aligned">
            <input
              value={baseFrags()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setBaseFrags(event.target.value)
              }}
              type="numeric"
              min="0"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td class="td_center_aligned">
            <input
              value={afterWapFrag()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
                setAfterWapFrag(event.target.value);
              }}
              type="numeric"
              min="0"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td class="TableMarkerText">Total WAP hours</td>
          <td>
            <a class="bold_numbers">{totalWapHours()}</a>
          </td>
        </tr>
        <tr>
          <td class="TableMarkerText">WAP time</td>
          <td class="td_center_aligned">
            <input
              value={wapTime()}
              onChange={(event) => setWapTime(event.target.value)}
              type="numeric"
              min="0"
              class="form__field"
            >
              {" "}
            </input>
          </td>
          <td class="td_center_aligned">
            <button class="button-5" onClick={() => SubmitWap()}>
              Add WAP
            </button>
          </td>
          <td>
            <button class="button-5" onClick={() => ResetPostWap()}>
              Reset Post-Wap
            </button>
          </td>
          <td>
            <button class="button-5" onClick={() => ResetStats()}>
              Clean history
            </button>
          </td>
        </tr>
        <tr>
          <td>
            Increase pre-WAP <br></br>values by Post?
            <input
              type="checkBox"
              onChange={(event) => {
                setupdateBaseToggle(event.target.checked);
                event.target.value = event.target.value.replace(/[^\d.-]/g, '');
              }}
              checked={updateBaseToggle()}
              value={updateBaseToggle()}
            ></input>{" "}
          </td>
        </tr>
        <tr> 
        
        </tr>
      </tbody>
    </table>
  );
}
