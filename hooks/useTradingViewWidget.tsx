'use client'

import {useEffect, useRef} from "react";

const useTradingViewWidget = (scriptUrl:string, config: Record<string, unknown> ,height= 600) => {
   const continerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
            if(!continerRef.current) return;
            if(continerRef.current.dataset.loaded) return;
            continerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width:100%; height: ${height}px" </ div>`;

            const script = document.createElement("script");
            script.src = scriptUrl;
            script.async = true;
            script.innerHTML = JSON.stringify(config)
        continerRef.current.appendChild(script);
            continerRef.current.dataset.loaded = 'true';
            return () =>{
                if (continerRef.current){
                    continerRef.current.innerHTML ="";
                    delete continerRef.current.dataset.loaded;

                }
            }
        },
        [scriptUrl, config, height]
    );
   return continerRef;

}
export default useTradingViewWidget
