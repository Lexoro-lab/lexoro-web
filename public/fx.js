/* ============================================================
   LEXORO FX — AI-math flow field · neural hero · custom cursor
   One shared rAF loop. Performance + reduced-motion aware.
   ============================================================ */
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine   = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (reduce) return;

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const FXCFG = { density:1, skip:0.04, big:0.14, opMul:1, inkScale:1 };

  /* shared pointer state (page coords) */
  const mouse = { x:-9999, y:-9999, active:false };

  /* ---------- A. BACKGROUND — HAND-DRAWN SCIENCE NOTEBOOK ---------- */
  /* A densely-filled graph-paper page: pencil-gray equations, neural
     nets, planets, atoms, flasks, molecules — all wobbly & hand-drawn,
     gently breathing. Inspired by a scribbled scientist's notebook. */
  const bg = document.getElementById('fx-bg');
  let bx, bW, bH, items = [];
  const HAND = `'Caveat', 'Segoe Print', 'Bradley Hand', cursive`;
  let INK  = '88,90,98';          // soft pencil gray
  let INK2 = '120,122,130';       // lighter gray for fills/shading
  let curAccent = '31,71,230';
  let inkStyle  = 'graphite';
  const lighten = rgb => rgb.split(',').map(n=>Math.min(255,(+n)+38)).join(',');
  function applyInk(){
    if(inkStyle==='charcoal'){ INK='44,46,54';  INK2='80,82,92'; }
    else if(inkStyle==='accent'){ INK=curAccent; INK2=lighten(curAccent); }
    else { INK='88,90,98'; INK2='120,122,130'; }
  }

  const EQUATIONS = [
    'E = mc²','a² + b² = c²','F = ma','PV = nRT','E = hf','i² = −1',
    'e^(iπ) + 1 = 0','P(A|B) = P(B|A)·P(A)/P(B)','y = Wx + b','ŷ = σ(Wx + b)',
    'σ(x) = 1/(1+e^−x)','ReLU = max(0,x)','loss = −Σ y·log(ŷ)','w := w − α·∂L/∂w',
    'Σ 1/n² = π²/6','d/dx eˣ = eˣ','∇·E = ρ/ε₀','x = (−b ± √(b²−4ac))/2a',
    '∫ e^−x² dx = √π','H = −Σ p·log p','F = G·m₁m₂/r²','Δx·Δp ≥ ℏ/2',
    'c = λν','a = πr²','v = u + at','sin²θ + cos²θ = 1','log(ab) = log a + log b',
    '2 + 2 = 4','7 × 8 = 56','∮ B·dl = μ₀I',
  ];
  const NOTES = ['neural net','gradient ↓','back-prop','entropy','eigen-value',
    'quantum','∂loss','weights','epoch ↻','tensor','∴ converges','hypothesis','Q.E.D.'];
  const DOODLES = ['saturn','atom','flask','molecule','orbit','comet','bulb',
    'book','dna','nn','wave','triangle','infinity','sun','spiral','sigma',
    'rocket','telescope','magnet','gear','pendulum','apple','planet','moon',
    'constellation','galaxy','satellite','lightning','compass','eye','pulley'];
  // bigger 'feature' doodles to anchor the page like the reference
  const BIG = ['saturn','galaxy','planet','atom','orbit','constellation','rocket','telescope'];

  function rnd(a,b){ return a + Math.random()*(b-a); }
  const pick = arr => arr[(Math.random()*arr.length)|0];

  function makeField(){
    items = [];
    const cell = Math.max(68, Math.min(150, Math.sqrt(bW*bH/150)) / Math.sqrt(FXCFG.density));
    for(let gy=-0.5; gy*cell < bH+cell; gy++){
      for(let gx=-0.5; gx*cell < bW+cell; gx++){
        if(Math.random() < FXCFG.skip) continue;               // gaps tunable by richness
        const r = Math.random();
        const kind = r < 0.34 ? 'eq' : r < 0.44 ? 'note' : 'doodle';
        const it = {
          kind,
          x: gx*cell + rnd(0.05,0.95)*cell,
          y: gy*cell + rnd(0.05,0.95)*cell,
          rot: rnd(-0.16,0.16),
          jitter: Math.random()*1000,
          seed: Math.random()*6.28,
          shimmer: rnd(0.4,1.0),
          baseOp: 0,
        };
        if(kind==='eq'){   it.text = pick(EQUATIONS); it.size = rnd(19,36); it.baseOp = rnd(0.07,0.12); }
        if(kind==='note'){ it.text = pick(NOTES);     it.size = rnd(18,27); it.baseOp = rnd(0.06,0.10); }
        if(kind==='doodle'){
          const big = Math.random() < FXCFG.big;
          it.sub = big ? pick(BIG) : pick(DOODLES);
          it.scale = big ? rnd(1.5,2.3) : rnd(0.6,1.3);
          it.baseOp = rnd(0.06,0.11); it.rot = rnd(-0.10,0.10);
          if(it.sub==='nn') it.layers=[2,(rnd(3,4)|0),(rnd(3,4)|0),1];
          if(it.sub==='wave') it.kindOf=(Math.random()*3)|0;
        }
        items.push(it);
      }
    }
  }

  function initBG(){
    if(!bg) return;
    bW = bg.clientWidth; bH = bg.clientHeight;
    bg.width = bW*DPR; bg.height = bH*DPR;
    bx = bg.getContext('2d'); bx.scale(DPR,DPR);
    bx.textBaseline = 'middle'; bx.lineJoin = 'round'; bx.lineCap = 'round';
    makeField();
  }

  /* ---- hand-drawn stroke helpers (wobble = human, seed = stable) ---- */
  function hLine(x1,y1,x2,y2,seed){
    const mx=(x1+x2)/2,my=(y1+y2)/2,len=Math.hypot(x2-x1,y2-y1);
    const nx=-(y2-y1)/(len||1),ny=(x2-x1)/(len||1),off=Math.sin(seed)*Math.min(5,len*0.07);
    bx.beginPath(); bx.moveTo(x1,y1); bx.quadraticCurveTo(mx+nx*off,my+ny*off,x2,y2); bx.stroke();
  }
  function hCircle(cx,cy,r,seed){
    bx.beginPath();
    for(let i=0;i<=15;i++){ const a=(i/15)*6.283; const rr=r*(1+Math.sin(a*3+seed)*0.07);
      const px=cx+Math.cos(a+0.2)*rr, py=cy+Math.sin(a+0.2)*rr; i?bx.lineTo(px,py):bx.moveTo(px,py); }
    bx.closePath(); bx.stroke();
  }
  function hEllipse(cx,cy,rx,ry,rot,seed){
    bx.save(); bx.translate(cx,cy); bx.rotate(rot); bx.beginPath();
    for(let i=0;i<=20;i++){ const a=(i/20)*6.283; const w=1+Math.sin(a*2+seed)*0.05;
      const px=Math.cos(a)*rx*w, py=Math.sin(a)*ry*w; i?bx.lineTo(px,py):bx.moveTo(px,py); }
    bx.closePath(); bx.stroke(); bx.restore();
  }
  function inkDot(cx,cy,r,op){ bx.fillStyle=`rgba(${INK},${op})`; bx.beginPath(); bx.arc(cx,cy,r,0,6.283); bx.fill(); }
  function arrow(x1,y1,x2,y2,seed){
    hLine(x1,y1,x2,y2,seed);
    const a=Math.atan2(y2-y1,x2-x1), hl=5;
    hLine(x2,y2,x2-Math.cos(a-0.45)*hl,y2-Math.sin(a-0.45)*hl,seed+1);
    hLine(x2,y2,x2-Math.cos(a+0.45)*hl,y2-Math.sin(a+0.45)*hl,seed+2);
  }
  function sparkle(cx,cy,r,seed){
    hLine(cx-r,cy,cx+r,cy,seed); hLine(cx,cy-r,cx,cy+r,seed+1);
  }

  function drawDoodle(it,op){
    bx.strokeStyle=`rgba(${INK},${op})`;
    bx.lineWidth=1.2; const s=it.sub; const k=it.scale; const j=it.jitter;
    switch(s){
      case 'saturn': {
        const R=14*k; hCircle(0,0,R,j);
        hEllipse(0,0,R*2.1,R*0.7, -0.5, j+1);
        break; }
      case 'atom': {
        inkDot(0,0,2.2*k,op);
        for(let i=0;i<3;i++) hEllipse(0,0,20*k,7*k, i*1.05, j+i);
        break; }
      case 'flask': {
        const w=11*k,h=22*k;
        hLine(-5*k,-h,-5*k,-h*0.35,j); hLine(5*k,-h,5*k,-h*0.35,j+1);   // neck
        hLine(-5*k,-h*0.35,-w,h,j+2); hLine(5*k,-h*0.35,w,h,j+3);        // body
        hLine(-w,h,w,h,j+4);                                            // base
        bx.strokeStyle=`rgba(${INK2},${op})`; hLine(-w*0.7,h*0.45,w*0.7,h*0.45,j+5); // liquid
        inkDot(-2*k,h*0.7,1.3*k,op*0.8); inkDot(3*k,h*0.55,1*k,op*0.8);        // bubbles
        break; }
      case 'molecule': {
        const R=14*k, pts=[];
        for(let i=0;i<6;i++){ const a=i/6*6.283+0.3; pts.push([Math.cos(a)*R,Math.sin(a)*R]); }
        for(let i=0;i<6;i++){ const a=pts[i],b=pts[(i+1)%6]; hLine(a[0],a[1],b[0],b[1],j+i); }
        for(const p of pts) hCircle(p[0],p[1],2.4*k,j);
        break; }
      case 'orbit': {
        hCircle(0,0,15*k,j); inkDot(0,0,2*k,op);
        const a=it.seed; inkDot(Math.cos(a)*15*k,Math.sin(a)*15*k,2.6*k,op);
        break; }
      case 'comet': {  // 5-point star burst
        for(let i=0;i<5;i++){ const a=i/5*6.283 - 1.57; hLine(0,0,Math.cos(a)*16*k,Math.sin(a)*16*k,j+i); }
        hCircle(0,0,3*k,j);
        break; }
      case 'bulb': {
        hCircle(0,-4*k,11*k,j);
        hLine(-5*k,6*k,5*k,6*k,j+1); hLine(-4*k,9*k,4*k,9*k,j+2);
        hLine(-2*k,-7*k,0,-1*k,j+3); hLine(0,-1*k,2*k,-7*k,j+4);          // filament
        break; }
      case 'book': {
        const w=16*k,h=12*k; hLine(-w,-h,w,-h,j); hLine(-w,h,w,h,j+1);
        hLine(-w,-h,-w,h,j+2); hLine(w,-h,w,h,j+3); hLine(0,-h,0,h,j+4);
        break; }
      case 'dna': {
        const h=26*k;
        for(let p=0;p<2;p++){ bx.beginPath();
          for(let i=0;i<=20;i++){ const y=-h/2 + i/20*h; const x=Math.sin(i/20*6.283 + p*3.14)*7*k;
            i?bx.lineTo(x,y):bx.moveTo(x,y); } bx.stroke(); }
        for(let i=2;i<19;i+=3){ const y=-h/2+i/20*h; const x=Math.sin(i/20*6.283)*7*k; hLine(x,y,-x,y,j+i); }
        break; }
      case 'nn': {
        const sp=20*k, vr=15*k, L=it.layers, pos=L.map((c,li)=>Array.from({length:c},(_,ni)=>({x:li*sp,y:(ni-(c-1)/2)*vr})));
        for(let li=0;li<pos.length-1;li++) for(const a of pos[li]) for(const b of pos[li+1]) hLine(a.x,a.y,b.x,b.y,j+a.y+b.x);
        for(const layer of pos) for(const nd of layer) hCircle(nd.x,nd.y,2.8*k,j+nd.x);
        break; }
      case 'wave': {
        const w=70*k,h=20*k;
        bx.strokeStyle=`rgba(${INK2},${op})`; hLine(-4,0,w,0,j); hLine(0,-h,0,h,j+5);
        bx.strokeStyle=`rgba(${INK},${op})`; bx.beginPath();
        for(let i=0;i<=40;i++){ const x=i/40*w; let y;
          if(it.kindOf===0) y=-Math.sin(i/40*6.283*1.5)*h*0.8;
          else if(it.kindOf===1) y=-Math.exp(-i/12)*h*0.9 + h*0.1;
          else y=-Math.pow((i/40-0.5)*2,2)*h*0.9 + h*0.5;
          i?bx.lineTo(x,y):bx.moveTo(x,y); }
        bx.stroke(); break; }
      case 'triangle': {
        const R=15*k; const a=[0,-R],b=[R*0.87,R*0.5],c=[-R*0.87,R*0.5];
        hLine(a[0],a[1],b[0],b[1],j); hLine(b[0],b[1],c[0],c[1],j+1); hLine(c[0],c[1],a[0],a[1],j+2);
        hLine(c[0]+3,c[1]-3,c[0]+3,c[1],j+3); hLine(c[0]+3,c[1],c[0]+6,c[1],j+4); // right-angle
        break; }
      case 'infinity': {
        hCircle(-7*k,0,6*k,j); hCircle(7*k,0,6*k,j+2); break; }
      case 'sun': {
        hCircle(0,0,9*k,j);
        for(let i=0;i<8;i++){ const a=i/8*6.283; hLine(Math.cos(a)*12*k,Math.sin(a)*12*k,Math.cos(a)*17*k,Math.sin(a)*17*k,j+i); }
        break; }
      case 'spiral': {
        bx.beginPath(); for(let i=0;i<=60;i++){ const a=i/60*6.283*2.5; const r=i/60*15*k;
          const px=Math.cos(a)*r, py=Math.sin(a)*r; i?bx.lineTo(px,py):bx.moveTo(px,py); } bx.stroke();
        break; }
      case 'sigma': {
        const R=13*k; hLine(R*0.7,-R,-R*0.7,-R,j); hLine(-R*0.7,-R,2,0,j+1);
        hLine(2,0,-R*0.7,R,j+2); hLine(-R*0.7,R,R*0.7,R,j+3); break; }
      case 'rocket': {
        const w=6*k,h=20*k;
        hLine(-w,-h*0.25,-w,h*0.5,j); hLine(w,-h*0.25,w,h*0.5,j+1);      // body
        hLine(-w,-h*0.25,0,-h*0.72,j+2); hLine(w,-h*0.25,0,-h*0.72,j+3); // nose
        hLine(-w,h*0.5,w,h*0.5,j+4);                                      // base
        hLine(-w,h*0.18,-w*2.1,h*0.62,j+5); hLine(-w*2.1,h*0.62,-w,h*0.5,j+6); // fin L
        hLine(w,h*0.18,w*2.1,h*0.62,j+7); hLine(w*2.1,h*0.62,w,h*0.5,j+8);     // fin R
        hCircle(0,-h*0.02,2.6*k,j+9);                                      // window
        bx.strokeStyle=`rgba(${INK2},${op})`;
        hLine(-3*k,h*0.5,0,h*0.85,j+10); hLine(3*k,h*0.5,0,h*0.85,j+11);  // flame
        break; }
      case 'telescope': {
        const L=24*k;
        hLine(-L*0.4,L*0.18,L*0.5,-L*0.4,j);    hLine(-L*0.32,L*0.34,L*0.58,-L*0.24,j+1);
        hLine(-L*0.4,L*0.18,-L*0.32,L*0.34,j+2); hLine(L*0.5,-L*0.4,L*0.58,-L*0.24,j+3);
        hLine(-L*0.05,L*0.28,-7*k,L*0.62,j+4); hLine(-L*0.05,L*0.28,6*k,L*0.62,j+5);
        hLine(-L*0.05,L*0.28,-L*0.05,L*0.62,j+6);
        break; }
      case 'magnet': {
        const w=9*k,h=15*k,iw=4*k;
        hLine(-w,-h*0.5,-w,h*0.4,j); hLine(w,-h*0.5,w,h*0.4,j+1);
        bx.beginPath(); bx.moveTo(-w,h*0.4); bx.quadraticCurveTo(0,h*0.95,w,h*0.4); bx.stroke();
        hLine(-iw,-h*0.5,-iw,h*0.28,j+2); hLine(iw,-h*0.5,iw,h*0.28,j+3);
        bx.beginPath(); bx.moveTo(-iw,h*0.28); bx.quadraticCurveTo(0,h*0.6,iw,h*0.28); bx.stroke();
        hLine(-w,-h*0.5,-iw,-h*0.5,j+4); hLine(w,-h*0.5,iw,-h*0.5,j+5);
        break; }
      case 'gear': {
        const R=11*k; hCircle(0,0,R,j); hCircle(0,0,3.2*k,j+1);
        for(let i=0;i<9;i++){ const a=i/9*6.283; hLine(Math.cos(a)*R,Math.sin(a)*R,Math.cos(a)*(R+4*k),Math.sin(a)*(R+4*k),j+i); }
        break; }
      case 'pendulum': {
        const L=20*k, piv=[0,-L*0.55], ang=it.seed%1.0+0.3, bob=[piv[0]+Math.sin(ang)*L, piv[1]+Math.cos(ang)*L];
        hLine(piv[0]-6*k,piv[1],piv[0]+6*k,piv[1],j);
        hLine(piv[0],piv[1],bob[0],bob[1],j+1);
        hCircle(bob[0],bob[1],3.6*k,j+2);
        bx.strokeStyle=`rgba(${INK2},${op})`;
        hLine(-Math.sin(ang)*L,piv[1]+Math.cos(ang)*L, bob[0],bob[1], j+3); // swing hint
        break; }
      case 'apple': {
        hCircle(0,-3*k,8*k,j);
        hLine(0,-11*k,1.5*k,-15*k,j+1);
        bx.beginPath(); bx.moveTo(1.5*k,-14*k); bx.quadraticCurveTo(7*k,-17*k,4*k,-11.5*k); bx.stroke();
        bx.strokeStyle=`rgba(${INK2},${op})`;
        arrow(0,7*k,0,17*k,j+2);   // gravity
        break; }
      case 'planet': {
        const R=12*k; hCircle(0,0,R,j);
        inkDot(-3.5*k,-2*k,1.6*k,op*0.7); inkDot(4*k,3*k,2.2*k,op*0.7); inkDot(-1*k,5*k,1.2*k,op*0.7);
        break; }
      case 'moon': {
        const R=11*k;
        bx.beginPath(); bx.arc(0,0,R,1.15,5.13); bx.stroke();
        bx.beginPath(); bx.arc(5*k,0,R*1.05,2.05,4.23,true); bx.stroke();
        break; }
      case 'constellation': {
        const cp=[[-13,-7],[-5,3],[5,-3],[12,7],[3,11],[-9,9]].map(p=>[p[0]*k,p[1]*k]);
        for(let i=0;i<cp.length-1;i++) hLine(cp[i][0],cp[i][1],cp[i+1][0],cp[i+1][1],j+i);
        for(const p of cp) inkDot(p[0],p[1],1.6*k,op);
        sparkle(cp[2][0],cp[2][1]-1,3*k,j); sparkle(cp[4][0]+2,cp[4][1],2.4*k,j+2);
        break; }
      case 'galaxy': {
        for(let arm=0;arm<2;arm++){ bx.beginPath();
          for(let i=0;i<=44;i++){ const a=i/44*6.283*1.25 + arm*Math.PI; const r=i/44*15*k;
            const px=Math.cos(a)*r, py=Math.sin(a)*r*0.55; i?bx.lineTo(px,py):bx.moveTo(px,py); }
          bx.stroke(); }
        inkDot(0,0,2.4*k,op);
        inkDot(9*k,3*k,1*k,op*0.7); inkDot(-8*k,-2*k,1*k,op*0.7);
        break; }
      case 'satellite': {
        hCircle(0,0,5*k,j);                                  // body
        hLine(-5*k,-3*k,-14*k,-3*k,j+1); hLine(-5*k,3*k,-14*k,3*k,j+2); hLine(-14*k,-3*k,-14*k,3*k,j+3);
        hLine(5*k,-3*k,14*k,-3*k,j+4);  hLine(5*k,3*k,14*k,3*k,j+5);  hLine(14*k,-3*k,14*k,3*k,j+6);
        hLine(-9*k,-3*k,-9*k,3*k,j+7); hLine(9*k,-3*k,9*k,3*k,j+8);   // panel ribs
        hLine(0,-5*k,0,-10*k,j+9); hCircle(0,-11*k,1.4*k,j+10);       // antenna
        break; }
      case 'lightning': {
        hLine(2*k,-15*k,-4*k,-1*k,j); hLine(-4*k,-1*k,2*k,-1*k,j+1);
        hLine(2*k,-1*k,-3*k,15*k,j+2);
        break; }
      case 'compass': {
        const R=12*k; hCircle(0,0,R,j);
        for(let i=0;i<4;i++){ const a=i/4*6.283; hLine(Math.cos(a)*R,Math.sin(a)*R,Math.cos(a)*(R*0.8),Math.sin(a)*(R*0.8),j+i); }
        arrow(0,5*k,0,-7*k,j+4); inkDot(0,0,1.4*k,op);   // needle N
        break; }
      case 'eye': {   // optics / observation
        bx.beginPath(); bx.moveTo(-13*k,0); bx.quadraticCurveTo(0,-9*k,13*k,0); bx.stroke();
        bx.beginPath(); bx.moveTo(-13*k,0); bx.quadraticCurveTo(0,9*k,13*k,0); bx.stroke();
        hCircle(0,0,4*k,j); inkDot(0,0,1.6*k,op);
        break; }
      case 'pulley': {
        hCircle(0,-6*k,6*k,j); inkDot(0,-6*k,1.3*k,op);
        hLine(-6*k,-6*k,-6*k,12*k,j+1); hLine(6*k,-6*k,6*k,9*k,j+2);
        hLine(-9*k,12*k,-3*k,12*k,j+3);             // weight
        hLine(-8*k,12*k,-8*k,17*k,j+4); hLine(-4*k,12*k,-4*k,17*k,j+5); hLine(-8*k,17*k,-4*k,17*k,j+6);
        break; }
    }
  }

  let prevT = 0;
  function drawGrid(){
    bx.strokeStyle = `rgba(${INK},0.030)`; bx.lineWidth = 1;
    const g = 27;
    bx.beginPath();
    for(let x=0;x<=bW;x+=g){ bx.moveTo(x,0); bx.lineTo(x,bH); }
    for(let y=0;y<=bH;y+=g){ bx.moveTo(0,y); bx.lineTo(bW,y); }
    bx.stroke();
  }
  function stepBG(t){
    if(!bg || !bx) return;
    prevT = t;
    bx.clearRect(0,0,bW,bH);
    drawGrid();
    for(let i=0;i<items.length;i++){
      const it = items[i];
      // gentle breathing + cursor spotlight (no drifting — stays full)
      let op = it.baseOp * FXCFG.opMul * FXCFG.inkScale * (0.78 + 0.22*Math.sin(t*0.6*it.shimmer + it.seed));
      if (mouse.active){
        const dx = it.x - mouse.x, dy = it.y - mouse.y, d2 = dx*dx + dy*dy;
        if (d2 < 34000) op += (1 - Math.sqrt(d2)/184) * 0.16;
      }
      bx.save();
      bx.translate(it.x, it.y);
      if (it.rot) bx.rotate(it.rot);
      if (it.kind==='eq' || it.kind==='note'){
        bx.font = `${it.kind==='eq'?600:500} ${it.size}px ${HAND}`;
        bx.fillStyle = `rgba(${INK},${op.toFixed(3)})`;
        bx.fillText(it.text, 0, 0);
        if(it.kind==='note'){
          const w = bx.measureText(it.text).width;
          bx.strokeStyle = `rgba(${INK},${(op*0.8).toFixed(3)})`; bx.lineWidth=1;
          hLine(0, it.size*0.55, w, it.size*0.55, it.jitter+3);
        }
      } else {
        drawDoodle(it, +op.toFixed(3));
      }
      bx.restore();
    }
  }

  /* ---------- B. HERO — LIVE NEURAL NETWORK SIMULATION ---------- */
  const hero = document.getElementById('fx-hero');
  let hx, hW, hH, heroRect = null;
  let net = null;          // { layers:[[node,...],...], edges:[...] }
  let waves = [];          // forward-pass signal waves
  let waveTimer = 0;

  function buildNet(){
    const padX = hW*0.13, padY = hH*0.12;
    // node counts per layer — an encoder-ish silhouette
    const counts = hH < 360 ? [3,5,5,4,2] : [4,6,7,5,3];
    const L = counts.length;
    const layers = counts.map((cnt, li) => {
      const x = padX + (li/(L-1))*(hW - 2*padX);
      const gap = Math.min(46, (hH - 2*padY)/Math.max(cnt-1,1));
      const y0 = hH/2 - gap*(cnt-1)/2;
      return Array.from({length:cnt}, (_, ni) => ({
        x, y: y0 + ni*gap, baseY: y0 + ni*gap,
        r: 3.4 + Math.random()*1.4,
        act: 0,                         // activation glow 0..1
        phase: Math.random()*6.28,      // bob phase
        amp: 3 + Math.random()*4,
      }));
    });
    const edges = [];
    for(let li=0; li<L-1; li++){
      for(const a of layers[li]) for(const b of layers[li+1]){
        edges.push({ a, b, li, w: 0.25 + Math.random()*0.75, flow: 0 });
      }
    }
    net = { layers, edges, L };
  }

  function spawnWave(){
    if(!net) return;
    waves.push({ layer: 0, t: 0, speed: 0.55 + Math.random()*0.25 });
    for(const nd of net.layers[0]) nd.act = 1;   // light up input layer
  }

  function initHero(){
    if(!hero) return;
    hW = hero.clientWidth; hH = hero.clientHeight;
    if(hW===0||hH===0) return;
    hero.width = hW*DPR; hero.height = hH*DPR;
    hx = hero.getContext('2d'); hx.scale(DPR,DPR);
    hx.lineCap = 'round';
    buildNet(); waves = []; waveTimer = 0;
    spawnWave();
    heroRect = hero.getBoundingClientRect();
  }

  function stepHero(t){
    if(!hero || !hx || !net) return;
    const dt = 1/60;
    hx.clearRect(0,0,hW,hH);

    // local pointer
    let mx=-9999, my=-9999;
    if (heroRect && mouse.active){ mx = mouse.x-heroRect.left; my = mouse.y-heroRect.top; }
    const cursorIn = mx>-9000 && mx>=0 && mx<=hW && my>=0 && my<=hH;

    // schedule forward passes; cursor over the input side fires extra ones
    waveTimer -= dt;
    if (waveTimer <= 0){ spawnWave(); waveTimer = 1.7 + Math.random()*1.1; }
    if (cursorIn && mx < hW*0.25 && Math.random() < 0.04) spawnWave();

    // bob nodes + decay activation
    for(const layer of net.layers) for(const nd of layer){
      nd.y = nd.baseY + Math.sin(t*0.8 + nd.phase)*nd.amp;
      nd.act *= 0.945;
      if (cursorIn){
        const d = Math.hypot(mx-nd.x, my-nd.y);
        if (d < 90) nd.act = Math.max(nd.act, 1 - d/90);
      }
    }

    // advance waves (layer-synchronized fronts)
    for(const wv of waves){
      wv.t += dt * wv.speed;
      if (wv.t >= 1){
        wv.t = 0; wv.layer++;
        if (wv.layer < net.L) for(const nd of net.layers[wv.layer]) nd.act = 1;
      }
    }
    waves = waves.filter(wv => wv.layer < net.L-1 || wv.t < 1);

    // ---- edges ----
    for(const e of net.edges){
      // base synapse line
      const flicker = 0.5 + 0.5*Math.sin(t*1.4 + e.li + e.a.y*0.02);
      let al = e.w * 0.16 * (0.6 + 0.4*flicker);
      // brighten edges in an actively-firing gap
      let firing = 0;
      for(const wv of waves) if(wv.layer === e.li) firing = Math.max(firing, 1);
      if (firing) al += e.w * 0.30;
      hx.strokeStyle = `rgba(255,255,255,${al.toFixed(3)})`;
      hx.lineWidth = 0.6 + e.w*0.7;
      hx.beginPath(); hx.moveTo(e.a.x, e.a.y); hx.lineTo(e.b.x, e.b.y); hx.stroke();
    }

    // ---- travelling signal pulses (the forward pass) ----
    for(const wv of waves){
      if (wv.layer >= net.L-1) continue;
      const ease = wv.t*wv.t*(3-2*wv.t);             // smoothstep
      for(const e of net.edges){
        if (e.li !== wv.layer) continue;
        const px = e.a.x + (e.b.x-e.a.x)*ease;
        const py = e.a.y + (e.b.y-e.a.y)*ease;
        // glow
        hx.fillStyle = 'rgba(150,225,255,0.18)';
        hx.beginPath(); hx.arc(px,py, 5.5, 0, 6.283); hx.fill();
        // core
        hx.fillStyle = `rgba(213,240,255,${(0.5+0.5*e.w).toFixed(2)})`;
        hx.beginPath(); hx.arc(px,py, 1.8, 0, 6.283); hx.fill();
      }
    }

    // ---- cursor synapse links ----
    if (cursorIn){
      for(const layer of net.layers) for(const nd of layer){
        const d = Math.hypot(mx-nd.x, my-nd.y);
        if (d < 130){
          hx.strokeStyle = `rgba(150,225,255,${((1-d/130)*0.5).toFixed(3)})`;
          hx.lineWidth = 1;
          hx.beginPath(); hx.moveTo(mx,my); hx.lineTo(nd.x,nd.y); hx.stroke();
        }
      }
      hx.fillStyle = 'rgba(150,225,255,0.9)';
      hx.beginPath(); hx.arc(mx,my, 3, 0, 6.283); hx.fill();
    }

    // ---- nodes ----
    for(const layer of net.layers) for(const nd of layer){
      const a = nd.act;
      if (a > 0.05){                                   // activation halo
        hx.fillStyle = `rgba(150,225,255,${(a*0.22).toFixed(3)})`;
        hx.beginPath(); hx.arc(nd.x, nd.y, nd.r + 6 + a*4, 0, 6.283); hx.fill();
      }
      // outer ring
      hx.strokeStyle = `rgba(255,255,255,${(0.30 + a*0.5).toFixed(3)})`;
      hx.lineWidth = 1.2;
      hx.beginPath(); hx.arc(nd.x, nd.y, nd.r + 2.5, 0, 6.283); hx.stroke();
      // core
      hx.fillStyle = `rgba(255,255,255,${(0.55 + a*0.45).toFixed(3)})`;
      hx.beginPath(); hx.arc(nd.x, nd.y, nd.r, 0, 6.283); hx.fill();
    }
  }

  /* ---------- C. CUSTOM CURSOR + MAGNETIC ---------- */
  let dot, ring, rx=window.innerWidth/2, ry=window.innerHeight/2;
  const magnets = [];
  function initCursor(){
    if(!fine) return;
    document.body.classList.add('fx-cursor');
    dot = document.createElement('div'); dot.className='cursor-dot';
    ring = document.createElement('div'); ring.className='cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);

    document.querySelectorAll('a, button, .magnetic, input').forEach(el=>{
      el.addEventListener('mouseenter', ()=>ring.classList.add('hover'));
      el.addEventListener('mouseleave', ()=>ring.classList.remove('hover'));
    });
    document.addEventListener('mousedown', ()=>ring.classList.add('down'));
    document.addEventListener('mouseup', ()=>ring.classList.remove('down'));

    // dark-section awareness
    const darkEls = document.querySelectorAll('.dark-band, .cta-band, .hero-art');
    // magnetic elements
    document.querySelectorAll('.btn, .nav-tabs a, .pcard-link, .foot-social a').forEach(el=>{
      el.classList.add('magnetic');
      magnets.push({ el, rect:null, strength: el.classList.contains('btn')?0.32:0.22 });
    });
    function refreshMagnetRects(){ magnets.forEach(m=> m.rect=m.el.getBoundingClientRect()); }
    refreshMagnetRects();
    window.addEventListener('scroll', refreshMagnetRects, {passive:true});
    window.addEventListener('resize', refreshMagnetRects);

    document.addEventListener('mousemove', (e)=>{
      mouse.x=e.clientX; mouse.y=e.clientY; mouse.active=true;
      dot.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      // dark detection
      const el = document.elementFromPoint(e.clientX,e.clientY);
      const onDark = el && el.closest && el.closest('.dark-band, .cta-band');
      dot.classList.toggle('on-dark', !!onDark);
      ring.classList.toggle('on-dark', !!onDark);
      // magnetic pull
      for(const m of magnets){
        const r=m.rect; if(!r) continue;
        const cx=r.left+r.width/2, cy=r.top+r.height/2;
        const dx=e.clientX-cx, dy=e.clientY-cy;
        const dist=Math.hypot(dx,dy);
        const range=Math.max(r.width,r.height)*0.9+30;
        if(dist<range){
          m.el.style.transform=`translate(${dx*m.strength}px,${dy*m.strength}px)`;
        } else if(m.el.style.transform){
          m.el.style.transform='';
        }
      }
    });
    document.addEventListener('mouseleave', ()=>{ mouse.active=false; });
  }
  function stepCursor(){
    if(!ring) return;
    rx += (mouse.x-rx)*0.18; ry += (mouse.y-ry)*0.18;
    ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;
  }

  /* ---------- MAIN LOOP ---------- */
  let last=0;
  function loop(now){
    const t=now*0.001;
    stepBG(t); stepHero(t); stepCursor();
    requestAnimationFrame(loop);
  }

  function boot(){
    initBG(); initHero(); initCursor();
    requestAnimationFrame(loop);
    // re-init once the handwriting font is ready so equations render in Caveat
    if (document.fonts && document.fonts.load){
      document.fonts.load("600 30px 'Caveat'").then(initBG).catch(()=>{});
      document.fonts.ready.then(initBG).catch(()=>{});
    }
    window.dispatchEvent(new Event('lexorofx-ready'));
  }

  /* ---- public control API for the Tweaks panel ---- */
  window.LexoroFX = {
    setRichness(level){
      if(level==='calm'){        FXCFG.density=0.55; FXCFG.skip=0.18;  FXCFG.big=0.10; FXCFG.opMul=0.80; }
      else if(level==='genius'){ FXCFG.density=1.75; FXCFG.skip=0.015; FXCFG.big=0.19; FXCFG.opMul=1.18; }
      else {                     FXCFG.density=1.00; FXCFG.skip=0.04;  FXCFG.big=0.14; FXCFG.opMul=1.00; }
      if(bx) makeField();
    },
    setInk(style){ inkStyle=style; FXCFG.inkScale = (style==='charcoal'?1.12:style==='accent'?0.96:1); applyInk(); },
    setAccent(rgb){ curAccent=rgb; if(inkStyle==='accent') applyInk(); }
  };
  function onResize(){ initBG(); initHero(); }
  window.addEventListener('resize', onResize);
  // re-measure hero canvas after layout/images settle
  window.addEventListener('load', ()=>{ setTimeout(initHero, 80); });

  if(document.readyState!=='loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
