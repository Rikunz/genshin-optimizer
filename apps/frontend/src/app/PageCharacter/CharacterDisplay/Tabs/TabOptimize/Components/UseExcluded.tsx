import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, ButtonGroup, CardContent, Divider, Grid, Skeleton, Typography } from "@mui/material";
import { Suspense, useCallback, useContext, useEffect, useMemo, useReducer } from "react";
import { Trans, useTranslation } from "react-i18next";
import ArtifactCardNano from "../../../../../Components/Artifact/ArtifactCardNano";
import ArtifactFilterDisplay from "../../../../../Components/Artifact/ArtifactFilterDisplay";
import CardDark from "../../../../../Components/Card/CardDark";
import CardLight from "../../../../../Components/Card/CardLight";
import CloseButton from "../../../../../Components/CloseButton";
import ModalWrapper from "../../../../../Components/ModalWrapper";
import SqBadge from "../../../../../Components/SqBadge";
import { CharacterContext } from "../../../../../Context/CharacterContext";
import { DatabaseContext } from "../../../../../Database/Database";
import ArtifactCard from "../../../../../PageArtifact/ArtifactCard";
import { artifactFilterConfigs, initialFilterOption } from "../../../../../PageArtifact/ArtifactSort";
import useBoolState from "../../../../../ReactHooks/useBoolState";
import useForceUpdate from "../../../../../ReactHooks/useForceUpdate";
import useMediaQueryUp from "../../../../../ReactHooks/useMediaQueryUp";
import { filterFunction } from "../../../../../Util/SortByFilters";
import useBuildSetting from "../useBuildSetting";

export default function UseExcluded({ disabled = false }: { disabled?: boolean }) {
  const { t } = useTranslation("page_character_optimize")
  const { character: { key: characterKey } } = useContext(CharacterContext)
  const { buildSetting: { useExcludedArts, artExclusion }, buildSettingDispatch } = useBuildSetting(characterKey)
  const [show, onOpen, onClose] = useBoolState(false)
  const numExcludedArt = artExclusion.length
  const [showSel, onOpenSel, onCloseSel] = useBoolState(false)
  const onSelect = useCallback((id: string) => {
    buildSettingDispatch({ artExclusion: [...artExclusion, id] })
  }, [buildSettingDispatch, artExclusion])
  const onDelSelect = useCallback((id: string) => {
    buildSettingDispatch({ artExclusion: artExclusion.filter(i => i !== id) })
  }, [buildSettingDispatch, artExclusion])
  return <>
    <ModalWrapper open={show} onClose={onClose} containerProps={{ maxWidth: "xl" }}><CardDark>
      <CardContent>
        <Typography>{t`useExcluded.title`}</Typography>
        <Divider />

        <ArtifactSelectModal show={showSel} onClose={onCloseSel} onSelect={onSelect} artExclusion={artExclusion} />
        <Button fullWidth onClick={onOpenSel} color="info" sx={{ mb: 1 }} startIcon={<AddIcon />} >{t`useExcluded.addExc`}</Button>
        {!!numExcludedArt && <CardLight sx={{ mb: 1 }}><Typography textAlign="center">{t`useExcluded.deSelectExc`}</Typography></CardLight>}
        <Grid container columns={{ xs: 3, md: 5, lg: 6, xl: 8 }} spacing={1}>
          {artExclusion.map(id =>
            <Grid item key={id} xs={1} >
              <ArtifactCardNano artifactId={id} slotKey="flower" BGComponent={CardLight} onClick={() => onDelSelect(id)} showLocation />
            </Grid>)}
        </Grid>
      </CardContent>
    </CardDark ></ModalWrapper>
    <ButtonGroup>
      <Button fullWidth onClick={() => buildSettingDispatch({ useExcludedArts: !useExcludedArts })} disabled={disabled} startIcon={useExcludedArts ? <CheckBox /> : <CheckBoxOutlineBlank />} color={useExcludedArts ? "success" : "secondary"}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box><Trans t={t} i18nKey="useExcluded.title" count={numExcludedArt}>Use Excluded Artifacts</Trans></Box>
          {useExcludedArts ? <SqBadge color="error"><Trans t={t} i18nKey="useExcluded.excNum" count={numExcludedArt}>Excluded <strong>{{ count: numExcludedArt } as TransObject}</strong> artifacts</Trans></SqBadge> :
            <SqBadge><Trans t={t} i18nKey="useExcluded.usingNum" count={numExcludedArt}>Using <strong>{{ count: numExcludedArt } as TransObject}</strong> excluded artifacts</Trans></SqBadge>}
        </Box>
      </Button>
      {useExcludedArts && <Button sx={{ flexShrink: 1 }} color="info" onClick={onOpen} disabled={disabled}><SettingsIcon /></Button>}
    </ButtonGroup>
  </>
}

const numToShowMap = { xs: 2 * 3, sm: 2 * 3, md: 3 * 3, lg: 4 * 3, xl: 4 * 3 }
const filterOptionReducer = (state, action) => ({ ...state, ...action })
function ArtifactSelectModal({ onSelect, show, onClose, artExclusion }:
  { onSelect: (id: string) => void, show: boolean, onClose: () => void, artExclusion: string[] }) {
  const { t } = useTranslation("page_character_optimize")
  const { database } = useContext(DatabaseContext)
  const clickHandler = useCallback((id: string) => {
    onSelect(id)
    onClose()
    console.log({ id })
  }, [onSelect, onClose])

  const [filterOption, filterOptionDispatch] = useReducer(filterOptionReducer, initialFilterOption())

  const [dbDirty, forceUpdate] = useForceUpdate()
  useEffect(() => { return database.arts.followAny(forceUpdate) }, [database, forceUpdate])

  const brPt = useMediaQueryUp()

  const filterConfigs = useMemo(() => artifactFilterConfigs(), [])
  const artIdList = useMemo(() => {
    const filterFunc = filterFunction(filterOption, filterConfigs)
    return dbDirty && database.arts.values.filter(filterFunc).map(art => art.id).filter(id => !artExclusion.includes(id)).slice(0, numToShowMap[brPt])
  }, [dbDirty, database, filterConfigs, filterOption, brPt, artExclusion])

  return <ModalWrapper open={show} onClose={onClose} containerProps={{ maxWidth: "xl" }} >
    <CardDark>
      <CardContent sx={{ py: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">{t`useExcluded.selExc`}</Typography>
        <CloseButton onClick={onClose} />
      </CardContent>
      <Divider />
      <CardContent>
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={200} />}>
          <ArtifactFilterDisplay filterOption={filterOption} filterOptionDispatch={filterOptionDispatch} filteredIds={artIdList} />
        </Suspense>
        <Box mt={1}>
          <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
            <Grid container spacing={1} columns={{ xs: 2, md: 3, lg: 4 }}>
              {artIdList.map(id =>
                <Grid item key={id} xs={1} >
                  <ArtifactCard
                    artifactId={id}
                    onClick={clickHandler}
                  />
                </Grid>)}
            </Grid>
          </Suspense>
        </Box>
      </CardContent>
    </CardDark>
  </ModalWrapper>
}
