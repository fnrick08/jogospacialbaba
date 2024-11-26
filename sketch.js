let bgMusic;
let musicList = [
  'path/to/music/g3ox_em - GigaChad Theme.mp3',
  'path/to/music/Pharmacist - North Memphis.mp3',
  'path/to/music/MoonDeity - NEON BLADE.mp3',
  'path/to/music/Hensonn - Sahara.mp3',
  'path/to/music/Dxrk - RAVE.mp3',
  'path/to/music/INTERWORLD - METAMORPHOSIS.mp3',
  'path/to/music/GREEN ORXNGE x Send 1 - SXND NXDES.mp3',
  'path/to/music/PLAYAMANE x Nateki - MIDNIGHT.mp3',
  'path/to/music/KORDHELL - LAND OF FIRE.mp3',
  'path/to/music/MTG - MALDICAO ETERNA 1.mp3',
  'path/to/music/ONIMXRU x SMITHMANE - SHADOW.mp3',
  'path/to/music/DVRST - Close Eyes.mp3',
  'path/to/music/Ghostface Playa - Swaggin\' at the Partment.mp3',
  'path/to/music/VISXGE - IMMACULATE.mp3',
  'path/to/music/Kordhell - Live Another Day.mp3',
  'path/to/music/xantesha - sunrise (slowed + reverb).mp3',
  'path/to/music/KSLV Noh - Disaster.mp3',
  'path/to/music/KORDHELL - MURDER IN MY MIND.mp3',
  'path/to/music/Ghostface Playa - Why Not.mp3',
  'path/to/music/Funk Tribu - Phonky Tribu.mp3'
];
let currentTrackIndex = 0;
let player;
let enemies = [];
let playerSize = 20;
let enemySize = 20;
let isGameStarted = false; // Controle para verificar se o jogo começou

function preload() {
  // Inicializa a primeira música, mas não toca ainda
  bgMusic = loadSound(musicList[currentTrackIndex], trackLoaded);
}

function setup() {
  createCanvas(400, 400);

  // Prepare enemies
  for (let i = 0; i < 5; i++) {
    let enemy = createVector(random(width), random(height));
    enemies.push(enemy);
  }
}

// Função para iniciar o jogo e a música
function startGame() {
  isGameStarted = true; // Sinaliza que o jogo começou
  bgMusic.loop(); // Toca a música em loop
  player = createVector(width / 2, height / 2); // Cria o player
}

function draw() {
  if (!isGameStarted) {
    background(220); // Exibe tela de espera até o jogo começar
    textAlign(CENTER);
    textSize(32);
    fill(0);
    text('Pressione 6 para começar a música!', width / 2, height / 2 + 30);
    return;
  }

  background(220);

  // Mostrar o jogador
  fill(0, 0, 255);
  ellipse(player.x, player.y, playerSize, playerSize);

  // Mostrar inimigos
  fill(255, 0, 0);
  for (let enemy of enemies) {
    ellipse(enemy.x, enemy.y, enemySize, enemySize);
  }

  // Mostrar radar de inimigos
  showRadar();

  // Controlar o jogador
  handleMovement();
}

// Callback chamada quando a track é carregada
function trackLoaded() {
  bgMusic.onended(playNextTrack);
}

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % musicList.length; // Atualiza o índice da música
  bgMusic.stop();
  bgMusic = loadSound(musicList[currentTrackIndex], trackLoaded);
  bgMusic.loop();
}

function handleMovement() {
  if (keyIsDown(87)) { // W
    player.y -= 2;
  }
  if (keyIsDown(83)) { // S
    player.y += 2;
  }
  if (keyIsDown(65)) { // A
    player.x -= 2;
  }
  if (keyIsDown(68)) { // D
    player.x += 2;
  }
}

// Função para mostrar radar
function showRadar() {
  fill(255);
  rect(0, height - 50, width, 50);

  fill(0);
  for (let enemy of enemies) {
    let radarX = map(enemy.x, 0, width, 0, width);
    let radarY = map(enemy.y, 0, height, 0, height - 50);
    ellipse(radarX, radarY, 5, 5);
  }
}

// Função para detectar pressionamento de tecla
function keyPressed() {
  if (key === '6' && !isGameStarted) { // Verifica se a tecla '6' foi pressionada
    startGame(); // Inicia o jogo e a música
  }
}function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}/* 

= S P A C E H U G G E R S =
A JS13K by Julie69.420 2021

- Use WASD or D-Pad - Move, jump, and climb
- Z or Left click - Shoot - Most things will break, some will burn
- X or Middle click - Roll - brief invulnerability, does damage, gives a boost, puts out fire
- C or Right click - Grenade - 200 per life, use wisely
- You can also use a Xbox or SNES style controller, connect up to 4 for co-op play!
- Kill all enemies to complete the level
- A radar along the bottom of the screen shows nearby enemies
- You start with 100 lives and get 2 more for completing each level
- For an optimal play experience please use Chrome in full screen mode
- There is no end, but for a challenge, try beating the first 5 levels

*/
eval(Function("[M='A@tqpcJo|QzqMyUTv|@}[QGJF^c]UXhgkLkCbtK{jI]c@b|FK{SbqUqsFUeWuhHNZDHeaAK[U|Nqxrceg_I|[cmcpJGMGn`dLPU_pCa~@_QtZKXi[BKET^UQy|`NuS[M|oCYrf?FCJETlbFigJqPNzbpDugIrWw{]cEE}UcH^lI}hFYVOqZSWQKBwFzcVnwR?EACnZarlcKS`lIusmsfQG|EKj]xHnuQnKaNQvHptfBy^ta{LlxmKreBkcXg^|Q{Zb^xFOlmI|Yoq]crhiwfu]{LA[OP^LnUeo?cqjCBPdnJRhyXi@V_f~YhymVKLtmINPUxXRMRxYB}mNKj@fEkj`KQWQ?ovAzmw[E|fSzlhYOylustD@}ZCQdOqrYTv~eGlsu_KlpJDZWnNN[tcPdYQN?mG}Gec?KECh?WSG[litxP?tGT}tp^[JT]s`GnM[}s]hCjHjzN`Vfq_mEpqSzL|Sd@uqJp][GOAS^VLp{BAAUjy@LQLX~PlERGAdSzP^w{LQmkWcN`atHGXefQ]mYbYrMy?ghOHCijO{|ao}KtwILaKnGIP|^V@CwnysX`ZLwuiEzgMh^RdApBNaOfjW_mQcpiTGZB}hIPGylRUsoJWk^HCKxIUjItGXK?MRBY[WxVSnvOcpXK@ZcSZbwfQpDi|yJP{[JnF@BSayX`CcDb}FvcwzRs`fkvHufUyq|[~f@lShIBrHSEy`bic]@Wfc}`cZzwlvjWI`pwQji@}Gqqnmi^tNbrxW[g]xZPZiRdDd[pxx_Ln{CqpYHkJzh^Sko`jNK?}Vs[Hm[@~?V{WauQI[X??xMCrHkJqb]coGqcy^zSOpvTbrYjsrs_XtpOTPRYcBnlrP[N`oYMxjL`FG{Z~pa?iES]A^NyK}MgCxQ~i|S_Mjx?CCfYi_dqKzRLAcemC`BL@LUKd_ToaP~Br^~yJZRjnXSgNPoemYSeK?OUt}VOyTRQertmrrIoObBZCzdc?YZFBi[BV@cxeZhTwjID?]Mj]ge?Z_rHXqR]dYg_QMaf[gg_a`Amwet@rwEySg]]hE~vistrwfD_m_MPluhyVGs?ISo?hzy[`ZRb~qfoRyUYkATRqLOnrHBC|]@pl?bSP}]SgCEmjivcxhOjJPBkmic_wMb{h{fwj@v^]iyLXwYGIHzTOprelH_@}RP_zU~?eCkNlWDjT_zB?RIy}fWXcDzzR^gILsBCzYYtm@ZcNaR`t]@j~jtMmzhMPDKEz]^OUPxzSWlhh`@DfmItAf^SaiurjEJGCbEhhtLOTMRR?WzlFa~nyMPeTFiEQzkpKjy|MhxZQ|yVQGGPZMeTWu~frFRAPdCpenIUSooyM~@BjwKBQ{`{PtLoNKyUHAJG[YkrFRZZRj|kNMuxiNiwZySznztO`EgLXjyqeBoeZiDv]evQkE|g|xt`grZuW^R[}Rl?L`W~}RnvOXUDpx@JSf~MVWAhH?[WelLXe^_LHCFtLKSRboX|OGUbNp^pB_@dxA_qWofgnbBHRfXte[m]noXOtTYAP?^d@}AvBfXnQ~jyZq[]|h|BCb`@CjHgXnikfzpcr|h@D[@zgXYzXPuuKY[V{SiRqtbc~qUk}KpN~cH|XS~MLwSLC~ek|{yzIhkj`S[}yfkAALP{PuE[McB[CHWqPjWTvDTGHFa{CXlroXmEaTWnmfbrdrhM[aod_VKBTXHHgl^mUSBa{`VVE{w_LaGJ^}}O?fEYDLf|BjH?^MUwe_L@^YuFrQvbJ@@|o[xw`XRPfQiotsnNW_Xr^KAEt}N?r]VIzvuDKHgtgp{Ri?tz[H{yJ^FFvSyKejQEI]sQy`MquftSibqOJL~xiMrPsGQbMyavWIgTBUB_QxJFouTGrqxkve~E[iRro}uMY|twh~PXV^wtG]XUAGL}g~Aa_mDPgLeL}byzoxgvEzwFXk[Z|tlOvKt~dMsGJ@QXNHZoW|VOnQ`|}|_ElgYRhfLXasd`_vJSyCRRi[x]cPBso`khZJ^U[Ex@{x^XZc?dhDtRzEAQy@rUquNx@aX[G{dWY]XHpDnxbKe~MKmmlGSM|}Zoa?au]dCd{WcwBPPp|CTurP}fKkPJ~AyCrE_G^TVflx{eOvzCVBxPGr]Po|ogtxFciGtYlTfazVjrjDw?sG{U@vEAE{q]rxdX~ScHd_m]HzPh?~V`dg}rfZyK[[SoqBwtxRNHMJ~|y|_}[PCSP[uR}@xozlQ~Mx_sQfT^FkvxgPACbF_Owv{mMzLnnO]gi|n[PowNTAeNeHXFGjZHeYfIArScv{|rNAtUfQFQoNaTpSJSpgkPuH]pDAaSS}?CaQF{E@mx^QLVEEyeHsTdfp?IqMU@h}XmZfKv|eJP~Rcme[qu_urvOhl_SpLJDgOrY}BR}RFDIWnSed`Tb]av}yQGpMpco|BrSIBz{?qdAUlQUQIDjW[Z[zCwdKveiEi|hCYDaGwYgrPqSEFKJpAN[`hHWm`[`QPg_wNiJBr@q~~Hq^AlzuaQaDR}HkcqtE_BC]hU{PKsQ_U}K^NTADNbQYgTmrdkv|JMC_JEhoWoZ}NHKwahRP?greW?cShbxVJqsvl{BBuidQXSyXY|uUaGMFVt|^fGGl]OZC|AZrt}xuJhazMbUXUMxP]_JNUSOHk[^DTLrE[|cALKHTYljCOb{tYop|EqI~d}GQUOfzUu`sJdGkCiEpIzk[yBkCauLG_}fCVcBWypOecuOWBP|ghXeGteyOpBQgWl^`cXvmkH`p?Wj}bCWJNPAexAVTFh_bsU]^E{fUyGZqvqxEoIlJ`VqTnaMfRMgSVgCOmZ?ygSnIrLH[|IL{vqNb{a_JGcouXFn^m^xhP|nCX~kjY~]N|Glpm]f|b]gxIEtQ|f[BVc_LTm[e|yuFSSRJk_ZxR@IbpnifXyGLvRrwMvVxXpJ@DyYZILsj{LBVcT_cD{H~tSbBXaqeoMszNJW[MGmB@HJPz^BYmCBVSv]VmdoGvGPaNNMxxPLwl[KSA@Pj~?J|Dn~cvprvhyZab]Qfmth_Y}IfNbDHh]b^Xzdv@ZnmYWMHtVu`wptRQDN}ABOA[a[`Wh^]eaqA]sNJNJLGgIgGxIpFJGudB_cr{ZzaEXYEbl]dmZLZqpzk~``ccPBn{ZdhNIEnWe_d]PU]Sj}{x?^fb|FGKZxFpQl`uZ[aYfzT}qW_}NPEgIZhFdNRaRbp^ylBDTgirkOKP}ytSIsz{SaYn@axql{@DzqWGlalq{ws]Bz{@tO`Nwo@TCIN`jVthv|xvo[glFnENl[hC@hlymtp[XF]kXS|pXDydsdPklYjiiuT_hDe]G@]OAkowV^rbn@Rm]T_HPh[zzqTqPbwRcMcAtdhjYDHpPKx`~{Zg[ehmtonLxIZt`A`pw^zRxGhOqbiiSJ[jJYbfCleE|NwIEvAx}Jv{~?N}AKOeWMNqc|jQ@]PHvpK]Cc^lhXTNGhIxLUYSj@KHB_xBpiOq~yQ`ZAMH`Ea[c`BjK@^swyvFlHRsHCCJnBMRip[oP^|sfhDRLvkcTG]NrtKYp}YVAO}aFQzrzAvGAhIKedZ]n`s]dGQu^BiGKo{WEXNBQvT^qvgSlLR|HNhN@O@JxCLhzlaNFwQpHF]UwReDp^^nW?JUriQjMsGbJy^d_QDfjqBw@}tiMWvtDzRG~Iw{NKnB[_d[XQRFh}QYAB`OqCWfHDhuYsftnL^UW{VVERi{AuS_YW[B{Y~hXayGjbHNWRST[vkLDsCPo}@d{FYSNpt{ZdbebdirNv}mMXvvQpKctQu{VvI|rb[jz@?TX~mm|[excfO|fC[`tNk|mydRo^flG_Osbc|~sSJNrkd[qi]hXFU@FgiOcIjVMlKOT@buim`RLEWFaaAjx@HlPKy^LowyaSO??UmGVLaMryJp^gNx{KnpkOWPWOOjIOwAZQMExLITqMckgFZKdVdevBomB@S`VY[]BjKy}TCjowZSOhY}aD~ygWz^cnY}rLE^fLCS]VLaJw_JtJ}YQ{IRbZ{SXgBXLRFUI^LXNNvFkYWFBfqlXSMmXFfCOSoPpqySwY[oFyjlpZTMc_KDHmb[WjCEpuErdI[i~Ou~siaSctVIOHRYA~Mh[QQPSddg`lGEGcoYtiPD^fa{~^fk?Muco|KBs^fD@NGUhjmH`pVC^YIhvVF_tIp|NN]ZuqIMMph{[Uj?tVdZMNYWsK|tCsVamD^A~jVs`XyaTcqPMZECL|{arDSNACsZ?AuEcbgIu{tFiKP{kvaGPrwponVc`SGh]lFskueEmQj~fsiC@][[WI[?t~vrtI@xC|c[^SWiyY^ZYz?ho^ja|D`XGk{nGYVluJExYYMt{PquMOHJQiWDmDMsUg?KypZT?~QbhTOWLg|`Yztr`kVMEAMkmnMYpvfDHrnZCXkiQ~MI^PzdFCR[]ZSagx}LImapJ@APrbm^pmDyMqgYFIznnYbrEELH_l@FjWM^_SkYDHQOMl?pzdaa~pTxcD}m`JxmILQl`OXJgvIl}dZrAzkhq?liE@dmuQr~gOcnbh{UscFLOkS_ocUc?PDpLxTDEOiM^yCrl[AvdXGdtJfMZyBDdpoAUkq}ekv[?Km]@dJex|}UrH_@Hc{FqnZMmL|]]NzGAlgkmC{L}OxDIlFCUuuLmudEma~TWMmrpu{I~abZzBWRrGFJTf}k^Q]QY[wQzwsoFKXy?on{DBjtwo]PpE~rR{BmAqWnp@@~`LATrOhA@aI@pjbgp[?~{H`|A@IGDXjHNxl~~M`fKNCc@PmSIkbSKkfWBE_XYUt]QQBgX{Mvn{ltL{fWoBNRdmJHO[W^cpnnxZZHvXdnVjmkL?Wsan~f~`^M[LRlC_qKQh[}sNMOstF|waLjd]Zq~CKW[NHmghgJylsLNhlYVJiFsTBtL~|niBt^RsxxsSmZZdkgAUe^MyJW]~T|aq`xY}dh`aNjSbbwK|E}IdGcFmy{^jsTTmmSCkgwEYORT~HR?Kw|hVcocGi?dkS?t?MP@tidS@rOHecNHL}Np~iMymEnoFRw}~Ypm{vEScHHYHwXPYreEwQzn`QNQx|x~l{GUeDs~IxNkeArCKe]m}D`sX`jOjYmmuGgi|isg@mroxY^js}q|UiXGGzcH|grbSRiu`qM_l]xjRX?lrx}GvMlMFb`sE|P[nPqI[jJMLlAZzUJPRGKIBw|Sfz{{MRglDAXynLKUsno`XPXs|qZ|^NLJ{}C^loV_ZapBQOqLaZBydWFjAAKWBzzSK_DjH}evWKmUYkRmkaZl~XRqfJvsILZ}asoSuxK~xZHPTIDailpT{oHWv?`r[PA[sWMLIJ`WMXlXPyr]C[vtGpgNBMFrZuovVBRnpYlZTzUvSYGGOUZUmQ]FixoOeRGTnt`FK]FgbSP_}TRsmUSzGVcBKbqzxySIFfbCvUUvgK`T]]CELk}WO@mrWkm?ISWSkiCy^xs@{A|qpwtp}wMP_s}]}UvIWvPMAlSAFAC]~bK^|zUHAe]qBr~CtYnq{JnJFEO|~lDE?Lfz~VO_D{_qDh^`~aUoB^sWlwE|BM~~VOZU{oTL~~yfBs~Vn^r{F|fDLvM}xB[LS]JadnKSol{TQPTtfNbZvZL~@BMcpaMtlK^ZZo[{i{o~kgde_[SA~dPkexk?MlfzYYdEEqtffYAxbb@WMEliD`Zj@@WLheKICxZULUMxVZd?Kgkg}BHpSEaWDVBEpmjQoUQNEkXnUnV@wbAIgX{YzxoUrLfXgotQSLy~zw_Wuir@GEjbpUrhRwYXVqonrl~Gn{]Iog]xi|{p@GQrWqOLzCLh~FSINRxWkgKJfNamRospc]unWnYUnvSAVwIGv}~rWPz[QIJYxpt_pOdLNKZEkMcEdfs@WVXNINjnF_HKajLFnr?K`ggg_{em`L|Ad|ohFF~UBVe@v}S@wEj|?IQrpEh~fYOW}JuU[iLZZnOg]y}GA^y}N{SSJam^vnALErZnSebpHZHlIVlR[quVpFaHcxN[pyVDe|woybMNBs}IBDblCkfXTznkqjWTUjZZtf~fUDc~wWYoprbegmMlhy}CDM{PUYApQRK@N?N~bnpvSNc@ANYnk?ZKFgv?Y[mfFB?wGca{bE]zpW}GdI}uzFDomaGAey{p]~Wmey@{Sg?RTtK`WlBiaIb?nU@zCVToWKdcvmIX{NXqQHcr[Z^nSbvBVyHcSEckYLzL`Q@R|vzqYs`YI?dZlDRcePTgW`Ew]?RsrEIV?^dI[MRLQf}[j_FwVE^KPdM^iDdI@mllIjCBf?m_n}p~ofDazHzLn_sqwzMj}_x?fVdww`VNIyLURVdPGF@bHAVcVrE`UX^hUIShoQLlIXHD^b~KMGKEHxOI?vK`tY~RS^S{Lh}J@^[dgHZ`XkRZ?KgLmagw{MWPYg]wQi?lRiPkENpFBQyYuv_YH}Y|BkeB@FnM_`XK`By{dxmt{u?mYEseLJJGnNRXLZbX}Um{O[@hdfkP?XuaVXbkenmvLFtiQrpheZcSmXizCC_uplGiwtqltIUynm~f]Hay|_[?G}{]rSQN@oE]_{^v{eibN{s[Rbuu_sxluMNfrwiGBBVotOuKNkrPo@YnzQm_}?xaFTzmDFdzv`d~qpTOgYS[n?GZ@`v^jRVsPIIac]zlrlLHeXNAaADC{I]cUR~nrJLrD@TvdwRLTtJU@efkf@GgZCpUlhyEjPH]}cGzNW^sqHKpOqyhKOu[O{l_bnQX?Nt__xSI_@PGoPca]xfoCVTcErvT?JtckdJMLltbf@XV[^`LxEd^axsoEiiEjdhOxHbAohvw`eSfAUEtKgahbB~sDdzWWfJbqB?vxubhTqQuAEJopp|cnZdk^pQ~IHLmAf}s}S{tMORDlp]~H~SL`Dq^fN[qyTu_KsZIhD~wNDhsWqofcBsiECSzxmzRH~mFfQChdcDWYP{bs_AbE^KlCEnOBS``rHsa|Wp_tzYRuisocxAwXaLt?[varQh[iwVQDevKM@Td[hBIwLn?eoz_P^FpBIxm^_tVeFokaXTwYmn]Zdo@BmZsh`}AihOkeu@dJ|uoRpYyGPLNffCwmucvck[fujwdy_i}fGg^aKOg]ebr{?kRH}AabfFl}`[UYYQVC`SsyBaN~snru`|@As`gVeM`|nWZuBxeurea]rugm~^oB?N@]h`TaBWjEF}IGIiMq`SIYt`b`JB|DCZdwPoDqIwfqHYLtV^PxUiOnl~|L|bmKzBzTi{p@GE]S?{~qdSpQuMOF|VTWT|VUM|Ukc^dIY^ZWG`T`gB[o`{HYTdPA^i[Nwp}iUJDOyWbEQsYnEG}|fjweiL}Z~doHyxKtOMVAZg{w?A_KjdmEnZHOWpd_OImBD]JBE`vybOkZQr^yTbNbgr@RNya[FxCiJU[}ayD{uSB_{AQtN}u~gsAuWEhUysr}KF_P_A|oZwZRwKQYHRBbv|QbJ[{Hnmn`XPDrlzY]eyd[O]Qo~C~Xzn{?qGxAeYfVWF_F[~Ag`K`h~rkzPuUAB@?VoZU`f^U}Zq`OzLfRThco_LwLkyHF]M_A_hBHz}J{stKZobtlK{YaJDr@ccQhx|Swvve{lObBbljhFra[HypKVk`cUNSkVqABiyOAsRnxpl}kKhYC@CoejzNNQwkXfKSOGnJbX}{Dbt`mZ@|}ews?|zoyvL[MWOkL~FhYZQqVtqlDxIGLLTlqYJSk?[M}himnq{uleWGDUPUMg^lD?XEU{kNeYx]UPlclFiPRVXwpNfGUGhZVf_@NreyrJJiFzN@IK@oD}LKYqy}AtVFAWVm@D@RaeC~]xI~}ZW{HV]fsLc]ZyfElP_gMV?uKtwUO^ncDsE@b{[bnESUV]un~s?eI]nGnzO{NjP}~hPHJWqhcOPOWVUNXHIODB]mskDtmF^evnISKT?hT?BmfsIYQM}mKqxl|gbM]PcdKvIA~Z|uoLzW}lhhVLqqJrNjGGtcQPru|hZqZ[aCJW}IqqUVmNYNZ?zk^`wRl_nWrlFYGshTJV~gFbrxesZuTojUepggVpFZIy@yZIYs_YhCQnunkrTIeyKL{j_bFdrKW^beB|ZtZCWJZWBeKsBTdCyYXYHEOeSAK@Nu^oVPcrPfolcAMKvtoFfRF_mjKRGBn@u[Y^u[GFgeYSrkD|fH|xW~_RS}FbmCve?~xxeVMMqS]K]Mz{`jTpMeDGjFWldnfT|DfWk}yPnqgBVvOshOHWyqKj`~?iRZX]wg|el]z`YfIWqMBQGJJrSE{_~QERIwwJokv@NMv|ALN@l`ceU{AtzsNHwcFkMXW_uqVBnekBDE}kxquc@KxTWAj{?l|nwkMuAijp|pi{AqvsYqIx`v[p}{{gj@xiGcfG`iAIWGlMoHH`Z}SYzofVINNi}iBJcLN@@ftth~xfhyRiBAQjQntm[agQc~OK}DRks|MX{tP}_sFfnpHN`tgX|ph@iiKmNMyoRbVmKS~IY}HRC}Vuzlzz{b]TeN{?elE]IEk[n]}BhI~XQw|MvED`WFTVboWxMUV}bwjdZ_]qB{rOOifQhy}BBkhCp_EU_g]wtWS}GnX`y}Gmybhgvggv|hYNHlKmM{hE_aDgQ|?RjLzFro~DXNBbZPW@P_LEgrdoB[fSmaaAUD{kfdQF?G?SKFwMlKI|M_@qVy_ogJeIhoFj|z~`CLvBBtnAgkEYERE?txZnev?Qo_fMniGmSK?}tz}Envhwoa]`RsG@lcKkbI^IoD|kh_CHEP|Y}TlzBdrX[D^a^Yu}tV^U|iKmXlWeykNoYwSTanzEqIWjT[|vygiLKVHMfW^wrAcSSUjycScOLzHqvCDeHDiak|JKyrAbhyjYlVPPFinfAf]cNWedYC{@[}[rr]MJBGUvNqfPURosFi~NNomQXwIpLxnzHhKDQ]pKuzxK|BIg`nYOhUXhpYzIZRBiGZpfB@brDcmtFmeWViRg~FspPKL{S[vo~WBdZSF_rqrx~aoSSJwdhbmhjq}rwEvvPScgoo~mGNdP`?CoiWtN_Oko{UJLcTLTeoaSnQYnztf@{evHOT?D[kj]YRrXT[DW^{?PDzbF|X|hkehoZXFfzKosjOjHV}DKfO[dKfZS|WuNuG}mi_UgGWbSNs@[_?C{Zf^Ft|rxtpJxCQ[PW~uH{]Htod|ean?nH^wLW_z]JU{lAwBmEIpYcuxbz{b}T@wy_I}YqpnRoqDhcdzz_QkI?c^{PeJHZaJTHuYsvIxysI{zCuvZEYiKSZecwWRtaMGkzUk@~~pb^OeYN~TDtlQkkA}qvh_Pje^FzVmQHlqyKUl_Id]fF?bOkNIZB`kPXsT]hJ_SpiFtI|BTDuz[mpxvtHVah}RmjXvRCtXS|`o_DLQrn^|qVFGcSxJmsk?yuncVGzSP}wy^BemD`|NI[z]xciPQd`zn{LvGwCo{wpjxcN_wqP[pqQ{A~e^_zsSxrXQm?Xq}MA_vP}MJnOvQ^@NemCq~^VZLA{_GFoISYXsJNvnNhkXNtVsqbaKE`HnYWKi[GlYFdWUcsBi}cFcNkvl`}QsXerHLIS[aGMKWnpGIbZSHI|~EBcnhkjtrvqRtx~FIcIKG^vzxWxVg{bYnNYkQ@tUJNXPitcC@bHn{QROPxdFlGNhI{@UsoYcm_kEudRfSm^TX[[AcCO]dyr}{OLAjznDcYSahXB[CVUk@tlSL~DvHuYxXU~kH?A]nWXu}{mULlKURCQCEZhiYkTXKa~Bw?hxbl@o}@luduc|Uee_hcj}t{QskhcFJaMpmumO@|z_W_NQxWergqVnRizgHeqYM_ea]W|wTCEqUdwF|{KHdcQdbiEmHF~s|ZFX_SSNkWHXiUOpkTVZMoFSLVNcT~OD]]t~gcdgjXqoGcI?abo^P~pyH~YSlywEHAEgP]Ag?sCapXi`aidyoygPR~pIdZinv~um}NMrdOAC@Ipop]NGPHMBqG@mIZcDNTtqDE]o|O`U?HogtEtsCiKVxnEE_V?t@w}PcQkjRV^rEgVAC?SpfMyWYuCx`GjBQwrSjmOrol@wdkQDCr_Qowt[[cyJGKAhgfV]O`jiUvJR[TFX^ZCtdKzg`mruKHHmS|roB{bWlZWOQ{RCrmziAEWDhciVZU@dJD{WK^[uWymoFJd|Tt?X^bgjLzL]DXrHnYp{ZoftfTyyNUTxOu`}azivMqGeGJK}JolrQKjJPM`[gjRciINGiQ|Ds@RLDPdv?hie_MsakD@FHIr?yTB{EYlnq}q`DMUvylC~b{U[Ip^dVg?KtoYm]?GAdCc`B^cyK~lvsBp@mGo^t?yAot~z}mIKATiNAFTLt~HYsQ|gEabu|}At}AH`RC?}f~[XKvp^|sLuKpO~yldUmfrhPd_lhLouxPQqv?IXM}DC|_uEmxuEmOo_[boHkq^QmMvmudNd~lA?EONk}O|Hg@n?`DF_ThuGJysOIsyQZTZAtMASrtRMrCMXfD_OIp{hp`@Ka}|]KU|C_tJwqswHfC{WuwnIbgahO}LNQHlezZ`QzQ|znpoqsC?zc[PmLSPiFVtX~GEpS_wqMXbLxeEJ^MJg]hxJizGFvmJVHa}qQrYOA~Jrn?m{V@DBk^]IBElkqTfO^^QwtjmF}YuB]H`SLppLVMG}|A{bJgeFA|pgp]POnl~trdcKi_pJu_v^_c{ljtJFRSidDxHOQvhj^m{fGaMlsJ{vqwLIkYEudaUEpkQVgDGHkMzxbWayg{mvKyGjtxrTB{nL^@uLqlFa]VPZLZqpRyYisoczgUCXBOcZ`QBqzwlcEr~kRGJDFzwYzyHYViTMZz}lKp~Isn}acxp^Zc`dMupOdmOFqYrYePrasTGWfoDmpPbJ{GRII@NbYK}{fRXVgsPGpKhyDEKKZ@SOGd?doRrQyV]QVBGiSWd]Y?TjzRT}EDRwcLF_SZjMIAaPZtn_PjhRyJ[GMuydpi{@~Hcxw~jE]dVDeZEkK[q_bOfRswfvNiyc[uwQEqHyZF?DUY{Z~nLE{[okGUEi{eK{fZys?Ap^@@VU}B{qUdpAOOH@svLZ~O~oIZMYjOv?VNAvewbRJxqKhE?qW_chUQhUxBsZwm@L{S^yDgexsu?MgJPmg^j]GToWVBuCaGmY[UeCsWP[VFt`Ks^pK_]vdY]xwZgKDfASvAneE}xjKDRvwHhK`dYlEtMHN`bJqZH[BGqkc_?@]eRfrNJg}_oqZS}fYhAzvdpxCUYWjXnQ~PKf@rbNoVVGjBqRQiBUWmoRYzGDGqa^upb[[[mKB?IrRGeOOBAp|SMhJFIn_wmkvnzZe}D}x_iuLHazTyocMEhmP]ceMoO|fSu?OTlVMOinIqJTdNr[kq{vCUNmaN~HzGwTnGQrXMT[Iv_INx]iVdmexMNrQHhBXdPND]?CT~z@KudtUzKY?CACK|EmyKSj]]DLWnHv|ZQ~nZ_f`WH^qDrBoUqBvBilYHPIvOqBXCZzy^XB^Qt[Xe]rKukA{XMNjjzBvs?uozn`OOTeTPExitF]Y]sI{CTnC@VvqlEd[rJZuIx{WSykdagpoLpYsVPAYvzDArMGqMr?WDKTucexxZwX_tkUaGBBxkVVh}P__tLSwLxH{T}|XBPBf{F_R^q~WhvawOT|@kVeXUdb@psEGvr}NCxffZ]PZOv|QFVtBm~DcXU_xPDV~{uICBJEuG?NDEUS}UdGVBM@lCnkH|ETlAYTJThQp~NPk[kVtyXlguprEG~XH[}xU`OLJ^NIX{AoERZbRlYzoopLzf|AUs}f@XRH]WTzOhehppl@_xnS@EkHPBJXRxblGnX`JnamldnvxTs`v^?fhFUrhLVMEM]u?sVoin?_WtIwCwAEK`zYMzAuUGon{RKiTIzlumjStlLb]tcwO{@E_Gjsf[k{UX}YeDzINdarwviz]yk`y_uBWJGqB^SmxLyzVNZo[nQq?A?Qq_{yVQDS_SUgIf[iUsSeRbEpSD[{GXsKDpqRYIiISo[bozCkXDHkNi{KT?O?LNlaDwgx}qLBhV}j_GcWX[E}J}sQHUa[N`^GitEe[yDvZRwIYPr?Dp|P^e]}eeifbPR}aayHgTQ]|HuG@]Pg~|RTqeZPqA_kslGmlcXPsoWHCCsqv``e_R_PzR]Hn_VClTCI]dSzZF}MtDts[@Fb^LZ|Bxo^[QHYDtMOufEG}}}S?ul_oFMrH``XXAgHmSk{]a{@uNDunafNyvZ~C|x_eEQso{pWYvfFBUPZki_IEjKsFKZd?oVhLMw|rLjc|p@K{JRwudLkpA?CJ[xaZEfDkfwPkyEoMJNTtfsv}oMPuHJZc_X]tf]cgfnMSqjXNHq?zZ^ZEqscHTJDap[QC?[cQ~wb~jEzRuNlrJEnlXtVt|{NoVaQe}OHkXk`pqCStH?xT]qqo|ddwxOSE?MizGTPKSuNieXeWRoDf`lcAzOLc@MhQcxU`?{^e@irGlQGkjwdmLTJ{a@AVEAoFTci@H_[jBK`XHL]oxiAyJehi`HMRqZ^cIeG[C_k|O][e[gLUXM[{jWeQroNHpyO}Vp||HBO[aL?~ieWy}?PveeKir[kxfSKvX?gOX~HVYk{X|ctCgTLDLwmFGVYRVLGEwQS@sQKjEJ^jT?~QO^eRdc^i{ExIItQHuqMYwTxFySpdBxo^czP@gaEFbl]}Sfez`dvd|g}J{xT{uueTb^Ujit]irXlHugxuudZgC_xwKtMGbzMDzvHEBueeD}q[m_d}jd{_EFdr^b_p{yWqOYjtPwGDYlV{Kr}Z{Y`WMi}uHNt{M{JZAKtF]MdOGI}BNuHUcmrlmLwMMdE[NAv~Rx^aCIOzOR`CGX_^vADA_?V@@z@p|bPTHxlPSSu_^~fW[tmhLG|Je|SmhfxzSQZzVrccPtAKgyGhlVrQGSQksLAIlgt^?p`vREFyn|Allt|GGR^FdNtVLHkeaxUbJtqpikmss|OsSYwnLsctBkVBPGGMMqfnMlYpBhlml_QJoatLnr~Jp[Qppx]Hu@Q~Zq?wofh|rTakOehfWigMl{dZNh_nGSzkJUkwaUXNE}@IB@NN@rIyjq?OdiEXm@Aw_drOv{R}du_UC}aa@ALypEtErOZc_IGIUz[ybWaEXaX|[_TC^DL_D@OIbMvne[zh{hZrGlLqzchPuX?w~XR[gIHirm~tQjwugyldpJLwZvxQAT}bOhQYp|dF`wUXCFgoqdbkWM[`_advVUppcbbSpe{UGmuMB~QsihbeDUb[?YShh{j|uByonKQmFu~cKIoRN|@x_MOIsSucfrMdhrOslqnisYaLnaRQ}FzGoa`|NEwU~RiPQtBdSgyqzBfGMVvLy}qXCIaWMO?DSDhVzg_hnBXxVff}_d|lqhjIw_oJ{tp^VDK{zUg}lrftGOAWVT~Ep|IfmfQ{O~gyyj`L_T^a[NjpYFz`HAN_NJUhuo_bHxrYPutUxEU}VPqVeidrNwykyZZdkir{RfX?@[CeRonPFwNU}^KjECwfsw~tQfUpQS[XTR?mVgv_UhCYKVHJNgtjgiywOxetfwfglhnVMLW{UT|`r`[KjkxfkvFWj_xpSqAQDbnM|K~gY_VUxxSSDIu|ysWIOeMebjXKRXwTZMjmhpRao?Rjqzeb}AHhk[AL{aOj}b^eVIZUPDBR{DnHDeIfqlGpyShbVKGoITsiEUT{k[Zfn[`]qBcGxf|y?_EDXgFMBTbTZimkrCbJQTpDxneCjpfkoCZ~TSzyQ|arUZx[iUhJ|l}NToYbS^`N?eYpIgQDNnLVUzMg{dfoq{rXxiTeM[Q}]IWmwaQsAl[ZNWeY?NP[Szl_sB~DcBWKqDfvIefrk{o|SxtoaulZnU[bOYOyK|gGLsJyRz@[GDCSvd@aH^fZTXhhWqN]tvnQMHBZjBafNefmVlIqPvAVdehtWU?InE?Owe^MjT_BIDLoXdpWkeWNSSATf@n@CJraCzZssSPIxKphbgrvpTdX_EqExbZTapYA?fLErESuVEMQZpb??LyCtPmEQ~Gw]D{prXokIDjcS}CNXmAOztsQsQGgB{D`yQgss~EsQNiypRmxhq_SR]OUrVH|NRVmhWt^qWxG@@oLo|yH`V]PzZU]AWNRjWOeblnPEu[|bo|AVFJ`DjOh_hf[k?`dS@GyOohBtSVvvWIdIHHBMgf]nDaWgnCtCfdX{iSnXVTcTSKEhvubjuPZskHmWjPx]kKjy{{k^fDmK]`}WezJiPG|gKs]d_jh^x|Kkzn@{n]}l|`hlT@UoAu^chbM|PcLw{GJ|a]vwgUHaq]y@ud`~RFjyhTMwZCV{HKDWhUL?TXoeCbVi|CU[Dzq|?uhUtII~SRtQji|JV[[lb_c]Je^pK`C~BMvcNwQ@sAbM~EMe@~jD?KWMLCOXA]NnCcBy?y`tf[|tv]kjeayFcpNXA[bajz@Os^sPNlEx?HmcRIzF@N@eDt[FDk@wRkh_k|~Ju[tS|jgxwYiZ?HPqyIIKnLpPOLd_A@?msbu~Y[c?h?NAQCCZ{CDa]oscnzrgUacm^?CKWWw_YvIaUOoSAd`gBn]s_@y]Q^iYR|prFaaaiG`^zWDQ}oSA@kxsmZxv{g~iX@?rCIT`Agpy~fxNkkHwpkNEUEoTDwJFPiD|wgKNqKv?M~}NjicEYA{oPvhHnKsYNme?f?V@gqcSQipW|_ya``IfBqnsVYUqIbGB||nTNKsJ}qch^OKR]DKbYUwsADDqgkKIZLP}zSYug|JePgihWxzMFKx_oKFhKBFTLoBQP^uXfVAWWamhMcj]iTt@WBTj|PgRxbfgg`}c~tr{hdTkDdP|vDyg|Jp?BSlu]OEPsm_[voufj[[ufzt[z^akyzlC[Ucact]TpdjwFGzuwa`KXTfGKzFqYdYFkna`j_U`}UVpb^@bs{ywkO[Q}~~eFT]{A^vjwPWEgZu}xCKL~r_niIn{RaOCAcdgCFtHtPZHcjoFIVZnlAFIxsvGIfZiStAaFSlYGXk}ElY?DI]~DSHaueAolIc~Vbmkf[N]^Xt~fzAQnG@{iSRqMNu`knrJKBf]hGryt_JFrZujDnRmBkzTRV{VKIFELt`slxJ?pNtBLGGCBIOGVgFSczMfV^W[JZQLisxyktU`ouE@mgYuTtOGqPajTYk|aA}UNLBZUHuQDcVTSoTMetVJa]RloAZnLDg?A~CyE_d|d]R|H^iRz^prGTgl~ZGmXgWxMqY~vIixRZqBuFNrXn^Pyhl[asjxXgYHgMU~THk]EqPKxkDG|EjtHA]FvsoJgHk[VkdEO~aQqVoFUeLfGN]BX?qqyy`qHxkBdaARAZgVrfyrlGuthB`D}d[aWwmTXct?J]nbjQThGCjAQqdS_[rdVbUYDkQkT}rcEJTWx?Kcx]AURx|gzjwrsFnAgDjvGbTX[JljJGaSxPK[UcI`qwxLWWhuMV|hQCvnUKRhva[LKjT[W|JAiY`dKzIdIAtiSqGg{jyi@tZHnXoQbDRbkXzXMteJ|W]oE?i|FE[byCH`BsIw_swYa_GTS`sty@B_a^q|yiynZMW`nL`BvxHb@OO|IZLppXZbMgMVPqicAdp`DtelpHimBb_MbZdGFxXOT`vUGMsOYD|T]wf`DeniC]IOBYeDA|H]?fxJ_knaSOUKJX~I}jxMv]KaZf?oMZh_JzIHvLuYj}r@nJFc~FPTHc`hMSbzqN|jmWqZ@oJS[vfMF[~tLKbhw_M]YDxATfRFhjo[|qUtm}B]mBWuaRX[FC|]H[TAvYh|PCRNCcRu}uTWuA{f?PWio?ifCpil]rRc~nRFvQvlic[vK~yIA_@lWs]NmG~o?EdDJhBEWg~u_e}r@wOO@cjUnbqcK`mKprNpolmPxUK`KE]D_UaAaVihV@s]?ayn]QnR{}HK?khJq~[[`Ry^H^`TraeKrxYbZ^UJELCei`[Rq{rTVv^SlyIzRKvJnvSPvuZP_`CNr^oWTiarENL@MgIjowzTpxiNgwgs@@Ek]xJSgFTyTmKEhR^sLPjD[vpERZ{DJ^?@]vFzo[x{rDTd?NRSBxEg^cqgk?YiW|nNm?iMbSNfBJlG|i@gqvFMoHboN|@kXVZ?FVX[xUT}mDi]LwQseqO@ICL][cN@os{?VgvUv`zVxlirSGuaneF^CMxZqprRlZgV}oBtSbov?PC|c^ZLahQlEVs@SLZNcUfC[hgloJ~xoXOQwAEObskiLBxkEZPKyuq]m^vteoHE?xbrK}wZFIU^NGUBSGquZp^gjrUzb|[be}dFD|EVg|ZIfwgKngy^pgpZVCQy?YBgFxx}_DlmuQ@kOXsLe]F~TwVsSQofDReYcKDcnzHrJoWLFEKp[VaoPd{lo}nfOIudDk_vuvrrGbRdkyJkK~k~NBa|c|FKJ_SAHIdDAtllV{qBgPx@OdtFHCgB`zFvMUg[MzmaH]}E@en~I^FDvah^fHUBRhXR{B~kB~k^WSfjn]Em@vopAQp|dqBcUoXKoKNdkInzmHlOUdZZ?QodT@[}pZTnghoiQ]PJ_UVCv]`Dx||wQDIHS{{ScvKmVMa?@ZMF?yIdV?RDUtBegbEeUVw]jAeJMeEa^[baOMyNSpRhCvq`~~PfN[W}[QzOG[fIEDWjerWlzffUxkQ}iJ@KO|wtLW[O@c@OOrEbLyYaIa`TxbqED~ZW~TX@iN[XFMGgtK?qQhneVHAACOP[^Tp]Z]EcT[nlFVNMkereuZypHOOpWoiTahe_jrx?q[zV}`VVbT{vxv~VOPfjApJIgPAIsXI^sD{ekMIj}CbJ[V]LYWexBRbUj{zo~C{{GK]cDr{zw}w@`fXHmVV}XsmtG`kN|LFwFZ_CD[K_U]~'",...']charCodeAtUinyxp',"for(;e<31402;c[e++]=x-128)for(x=1;x<128;n=p.map((i,y)=>(t=r[i]*2+1,t=Math.log(t/(h-t)),A-=a[y]*t,t/1250)),A=~-h/(1+Math.exp(A))|1,U=o%h<A,o=o%h+(U?A:h-A)*(o>>15)-!U*A,p.map((i,y)=>(t=r[i]+=(U*h/2-r[i]<<15)/((C[i]+=C[i]<4)+1/20)>>15,a[y]+=n[y]*(U-A/h))),x=x*2+U)for(p='010202103204310541064206531086532087542109641'.split(A=0).map((i,y)=>(t=0,[...i].map((i,y)=>(t=t*997+(c[e-i]|0)|0)),h*128-1&t*997+x)*12+y);o<h*128;o=o*64|M.charCodeAt(d++)&63);for(C=String.fromCharCode(...c);r=/[\0-]/.exec(C);)with(C.split(r))C=join(shift());return C")([],[],1<<15,[0,0,0,0,0,0,0,0,0,0,0,0],new Uint16Array(51e6).fill(1<<13),new Uint8Array(51e6),0,0,0))