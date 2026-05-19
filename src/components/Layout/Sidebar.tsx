import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/kana', label: '假名学习', icon: '🔤' },
  { path: '/grammar', label: '语法学习', icon: '📝' },
  { path: '/reading', label: '阅读练习', icon: '📖' },
  { path: '/speaking', label: '跟读练习', icon: '🎤' },
  { path: '/vocabulary', label: '词汇', icon: '📚' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <span className={styles.logoKana}>日</span>
        </div>
        {!collapsed && <span className={styles.logoText}>JPLen</span>}
        <button
          className={styles.collapseBtn}
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? '展开侧栏' : '收起侧栏'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive || (item.path !== '/' && location.pathname.startsWith(item.path)) ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
            {!collapsed && (
              <div className={styles.navIndicator} />
            )}
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        {!collapsed && (
          <div className={styles.footerContent}>
            <div className={styles.levelBadge}>N5</div>
            <span className={styles.footerText}>当前级别</span>
          </div>
        )}
      </div>
    </aside>
  );
}
