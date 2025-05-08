/*
  Project Name: fastify-vite-solidjs
  License: MIT
  Created by: Lightnet
*/
//var React={};
//React.createElement=function(){};

import { splitProps, createSignal, Show } from "solid-js";
import Classes from './database/Classes';
import HexaClassDisplay from './HexaClassDisplay';
import WapDisplay from './WapDisplay';
import {makePersisted} from "@solid-primitives/storage";
import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";
import "../styles.css"

function isAlphaOrParen(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

export default function App(){

  const [selClass, setClass, initClass] = makePersisted(createSignal("Adele"))
  
  console.log(selClass())
  if(!isAlphaOrParen(selClass()))
    setClass("Adele")
  return (<>
      <table>
        <thead>
          <tr>
          <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Select options={Object.keys(Classes)} class="custom" onChange= {
                  ((event) => setClass(event))
                } initialValue={selClass()} ></Select>
              <Show when={selClass} fallback={<div></div>}>
                <HexaClassDisplay cl={
                  Classes[selClass()]
                } clName={selClass()}></HexaClassDisplay>
              </Show>
            </td>
          </tr>
          <tr>
            <td>
              <h3 class="big_text">Please input WAP time as hours. A SWAP is .5 hours.</h3>
              <WapDisplay></WapDisplay>
            </td>
          </tr>
        </tbody>
      
      </table>
      <footer>
        <p>Author: Marissa@Kronos</p>
        <p>Credits for testing and ideas: Laskies, Alice</p>
        <p>Credits to the <a href="https://maplestorywiki.net/">Maplestory Wiki</a> and <a href="https://grandislibrary.com/">Grandis Library</a> for their skill images.</p>
        <p>For suggestions: <a href="mailto:sohcahlinne@gmail.com">sohcahlinne@gmail.com</a></p>
        <p>Like my work? Buy me a <a href='https://www.Ko-fi.com/marissalillevere'>Ko-fi</a></p>
        <p>SHOUTOUT TO WHIMSY 💖</p>
      </footer>

    </>);
}
