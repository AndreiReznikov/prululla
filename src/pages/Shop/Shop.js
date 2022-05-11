import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';
import ClothingList from '../../components/ClothingList/ClothingList';
import styles from './Shop.module.css'

const Shop = observer(() => {
    const { clothes } = useContext(Context)
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className={styles.shopContainer}>
            <div
                onClick={() => setShowDropdown(showDropdown ? false : true)}
                className={styles.typeDropdownContainer}
            >
                <div className={styles.typeDropdown}>
                    <span>Category</span>
                    <span 
                        className={styles.typeDropdownArrow}
                    >
                    </span>
                </div>
                {showDropdown &&
                    <div className={styles.mobileTypeListContainer}>
                        <ul className={styles.mobileTypeList}>
                            {clothes.types.map(type =>
                                <li
                                    key={type}
                                    onClick={e => clothes.setSelectedType(e.target.innerHTML)}
                                    className={styles.typeItem}
                                    style={{ color: type === clothes.selectedType ? 'black' : 'rgba(34,34,34,.7)' }}
                                >
                                    {type}
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
            <div>
                <ul className={styles.typeList}>
                    {clothes.types.map(type =>
                        <li
                            key={type}
                            onClick={e => clothes.setSelectedType(e.target.innerHTML)}
                            className={styles.typeItem}
                            style={{ color: type === clothes.selectedType ? 'black' : 'rgba(34,34,34,.7)' }}
                        >
                            {type}
                        </li>
                    )}
                </ul>
            </div>
            <ClothingList />
        </div>
    );
});

export default Shop;