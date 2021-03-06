import {useState, KeyboardEvent, useEffect} from "react";
import React from "react";
import style from './Select.module.css'

export type ItemType = {
    title: string
    id: any
}

export type SelectPropsType = {
    /**
     * Id of selected item
     */
    id: any
    /**
     * Callback that change selected item
     * @param id
     */
    onChange: (id: any) => void
    /**
     * Items of list
     */
    items: ItemType[]
}

export const Select = React.memo((props:SelectPropsType) => {
    console.log(`render select with id ${props.id}`)
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [hoveredItemId, setHoveredItemId] = useState(props.id);

    useEffect(() => {setHoveredItemId(props.id)}, [props.id]);

    const onChangeHandler = (id: any) => {
        props.onChange(id);
        setCollapsed(true)
    };

    const selectedItem = props.items.find(i => i.id === props.id);
    const hoveredItem = props.items.find(i => i.id === hoveredItemId);
    const onCollapsedSelect = () => {
        setCollapsed(!collapsed);
        setHoveredItemId(selectedItem && selectedItem.id)
    };
    const onBlurSelect = () => {
        setCollapsed(true)
        setHoveredItemId(selectedItem && selectedItem.id)
    };
    const onKeyUpSelect = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredItemId) {
                    const pretendentItem = e.key === 'ArrowDown' ?
                        props.items[i + 1] :
                        props.items[i - 1];
                    if (pretendentItem) {
                        props.onChange(pretendentItem.id);
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].id)
            }
        }
        if (e.key === 'Enter') {
            if (collapsed) {
                setCollapsed(false)
            } else {
                setCollapsed(true);
            }
        }
       if (e.key === 'Escape') {
           setCollapsed(true);
       }
    };

    return (
        <div tabIndex={0}
             className={style.selectWrapper}
             onBlur={onBlurSelect}
             onKeyUp={onKeyUpSelect}>
            <div tabIndex={0} className={collapsed ? style.selectValueWrapper : `${style.selectValueWrapper} ${style.active}`}>
                <div onClick={onCollapsedSelect}
                     className={collapsed ? style.selectValue : `${style.selectValue} ${style.active}`}>
                    {selectedItem && selectedItem.title}
                </div>
            </div>
            <div className={style.itemsBlockWrapper}>
                <div className={style.itemsBlock}>
                    {!collapsed && props.items.map(item => {
                        return (
                            <div key={item.id}
                                 className={hoveredItem === item ?
                                     `${style.item} ${style.hoveredItem}` :
                                     style.item}
                                 onClick={() => onChangeHandler(item.id)}
                                 onMouseEnter={() => setHoveredItemId(item.id)}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
});