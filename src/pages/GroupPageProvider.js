import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GroupMembersCard } from 'components/GroupMembersCard';
import { GroupLarge } from 'components/GroupLarge';

import { fakeQueryGroup } from 'queries/fakequerygroup';
import { GroupFetch } from 'reducers/GroupAsyncActions';
import { actions } from './AppProvider';

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0 
 * @returns 
 */
export const GroupPageProvider = ({id}) => {

    //vyber vsech skupin ze store
    const groups = useSelector(state => state.groups)
    //vyber idcka u skupiny, ktere bylo vybrano
    const selectedId = useSelector(state => state.groups.selectedId)
    //vyber skupiny ze store, ktera ma byt zobrazena
    const group = groups[id] //|| {id: id}

    //console.log(group)
    useEffect(
        () => {
            console.log('GroupPageProvider refetch ' + id)
            actions.groupFakeFetch(id)           
        }, [id, selectedId]
    )

    if (group) {
        //skupina je ve store
        return (
            <GroupLarge group={group} actions={actions}/>
        )
    } else {
        //skupina ve store neni
        return (
            <div>Loading... {id}, {group}</div>
        )
    }
}